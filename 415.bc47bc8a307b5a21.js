"use strict";(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[415],{7415:(h,d,s)=>{s.d(d,{Z:()=>I});var a=s(9401),n=s(2223),v=s(4396),g=s(4758),l=s(4755),p=s(9114),_=s(8097),f=s(7870),w=s(1728);function C(i,c){if(1&i){const e=n.EpF();n.TgZ(0,"div")(1,"form",14),n.NdJ("ngSubmit",function(){n.CHM(e);const o=n.oxw().$implicit,r=n.oxw(2);return n.KtG(r.onSubmitUserForm(o.id))}),n.TgZ(2,"mat-form-field")(3,"mat-label"),n._uU(4,"First name"),n.qZA(),n._UZ(5,"input",15),n.qZA(),n.TgZ(6,"mat-form-field")(7,"mat-label"),n._uU(8,"Last name"),n.qZA(),n._UZ(9,"input",16),n.qZA(),n.TgZ(10,"mat-form-field")(11,"mat-label"),n._uU(12,"Email"),n.qZA(),n._UZ(13,"input",17),n.qZA(),n.TgZ(14,"div",18)(15,"button",19),n._uU(16,"Save"),n.qZA(),n.TgZ(17,"button",20),n.NdJ("click",function(){n.CHM(e);const o=n.oxw(3);return n.KtG(o.showChangesField=!1)}),n._uU(18,"Cancel"),n.qZA()()()()}if(2&i){const e=n.oxw().$implicit,t=n.oxw(2);n.xp6(1),n.Q6J("formGroup",t.userForm),n.xp6(4),n.Q6J("value",e.id),n.xp6(4),n.Q6J("value",e.id),n.xp6(4),n.Q6J("value",e.id),n.xp6(2),n.Q6J("disabled",!t.userForm.valid)}}function k(i,c){if(1&i){const e=n.EpF();n.TgZ(0,"mat-expansion-panel",5),n.NdJ("closed",function(){n.CHM(e);const o=n.oxw(2);return n.KtG(o.showChangesField=!1)})("opened",function(){const r=n.CHM(e).$implicit,u=n.oxw(2);return n.KtG(u.onOpenUserPanel(r))}),n.TgZ(1,"mat-expansion-panel-header")(2,"mat-panel-title"),n._uU(3),n.qZA()(),n.TgZ(4,"div",6)(5,"div")(6,"div",7),n._UZ(7,"img",8),n.qZA(),n.TgZ(8,"div",9)(9,"span",10),n._uU(10),n.qZA()(),n.TgZ(11,"button",11),n.NdJ("click",function(){const r=n.CHM(e).$implicit,u=n.oxw(2);return n.KtG(u.onRemoveUser(r.id))}),n._uU(12,"Remove"),n.qZA(),n.TgZ(13,"button",12),n.NdJ("click",function(){n.CHM(e);const o=n.oxw(2);return n.KtG(o.showChangesField=!0)}),n._uU(14,"Change"),n.qZA()(),n.YNc(15,C,19,5,"div",13),n.qZA()()}if(2&i){const e=c.$implicit,t=n.oxw(2);n.xp6(3),n.AsE(" ",e.first_name," ",e.last_name," "),n.xp6(4),n.Q6J("src",e.avatar,n.LSH),n.xp6(3),n.Oqu(e.email),n.xp6(5),n.Q6J("ngIf",t.showChangesField)}}function A(i,c){if(1&i&&(n.TgZ(0,"div",2)(1,"mat-accordion",3),n.YNc(2,k,16,5,"mat-expansion-panel",4),n.qZA()()),2&i){const e=n.oxw();n.xp6(2),n.Q6J("ngForOf",e.userDetails)}}function U(i,c){if(1&i&&(n.TgZ(0,"span",32),n._uU(1),n.qZA()),2&i){const e=n.oxw(4);n.xp6(1),n.hij("Please input year from 1930 to ",e.maxDate.getFullYear(),"")}}function Z(i,c){if(1&i){const e=n.EpF();n.TgZ(0,"div")(1,"form",14),n.NdJ("ngSubmit",function(){n.CHM(e);const o=n.oxw().$implicit,r=n.oxw(2);return n.KtG(r.onSubmitunknownForm(o.id))}),n.TgZ(2,"mat-form-field")(3,"mat-label"),n._uU(4,"Year"),n.qZA(),n._UZ(5,"input",28),n.qZA(),n.YNc(6,U,2,1,"span",29),n.TgZ(7,"mat-form-field")(8,"mat-label"),n._uU(9,"Color"),n.qZA(),n._UZ(10,"input",30),n.qZA(),n.TgZ(11,"mat-form-field")(12,"mat-label"),n._uU(13,"Pantone"),n.qZA(),n._UZ(14,"input",31),n.qZA(),n.TgZ(15,"div",18)(16,"button",19),n._uU(17,"Save"),n.qZA(),n.TgZ(18,"button",20),n.NdJ("click",function(){n.CHM(e);const o=n.oxw(3);return n.KtG(o.showChangesField=!1)}),n._uU(19,"Cancel"),n.qZA()()()()}if(2&i){const e=n.oxw().$implicit,t=n.oxw(2);let o;n.xp6(1),n.Q6J("formGroup",t.unknownForm),n.xp6(4),n.Q6J("value",e.id),n.xp6(1),n.Q6J("ngIf",null==(o=t.unknownForm.get("year"))?null:o.invalid),n.xp6(4),n.Q6J("value",e.id),n.xp6(4),n.Q6J("value",e.id),n.xp6(2),n.Q6J("disabled",!t.unknownForm.valid)}}function T(i,c){if(1&i){const e=n.EpF();n.TgZ(0,"mat-expansion-panel",23),n.NdJ("closed",function(){n.CHM(e);const o=n.oxw(2);return n.KtG(o.showChangesField=!1)})("opened",function(){const r=n.CHM(e).$implicit,u=n.oxw(2);return n.KtG(u.onOpenUnknownPanel(r))}),n.TgZ(1,"mat-expansion-panel-header")(2,"mat-panel-title"),n._uU(3),n.ALo(4,"titlecase"),n.qZA()(),n.TgZ(5,"div",24)(6,"div")(7,"div",25)(8,"b"),n._uU(9,"Year:"),n.qZA(),n._uU(10),n.qZA(),n.TgZ(11,"div",26)(12,"b"),n._uU(13,"Color:"),n.qZA(),n._uU(14),n.qZA(),n.TgZ(15,"div",27)(16,"b"),n._uU(17,"Pantone:"),n.qZA(),n._uU(18),n.qZA(),n.TgZ(19,"button",11),n.NdJ("click",function(){const r=n.CHM(e).$implicit,u=n.oxw(2);return n.KtG(u.onRemoveUnknown(r.id))}),n._uU(20,"Remove"),n.qZA(),n.TgZ(21,"button",12),n.NdJ("click",function(){n.CHM(e);const o=n.oxw(2);return n.KtG(o.showChangesField=!0)}),n._uU(22,"Change"),n.qZA()(),n.YNc(23,Z,20,6,"div",13),n.qZA()()}if(2&i){const e=c.$implicit,t=n.oxw(2);n.xp6(3),n.hij(" ",n.lcZ(4,5,e.name)," "),n.xp6(7),n.hij(" ",e.year,""),n.xp6(4),n.hij(" ",e.color,""),n.xp6(4),n.hij(" ",e.pantone_value,""),n.xp6(5),n.Q6J("ngIf",t.showChangesField)}}function F(i,c){if(1&i&&(n.TgZ(0,"div",21)(1,"mat-accordion",3),n.YNc(2,T,24,7,"mat-expansion-panel",22),n.qZA()()),2&i){const e=n.oxw();n.xp6(2),n.Q6J("ngForOf",e.unknownDetails)}}let I=(()=>{class i{set users(e){this.userDetails=e}set unknown(e){this.unknownDetails=e}constructor(e,t,o){this.unknownService=e,this.userService=t,this.fb=o,this.panelOpenState=!1,this.maxDate=new Date}ngOnInit(){this.initForms()}initForms(){this.userForm=this.fb.group({avatar:[null],email:[null,[a.kI.email,a.kI.required]],first_name:[null,[a.kI.required]],id:[null],last_name:[null,[a.kI.required]]}),this.unknownForm=this.fb.group({id:[null,[a.kI.required]],name:[null,[a.kI.required]],year:[null,[a.kI.required,a.kI.min(1930),a.kI.max(this.maxDate.getFullYear())]],color:[null,[a.kI.required]],pantone_value:[null,[a.kI.required]]})}onOpenUserPanel(e){const{avatar:t,email:o,first_name:r,id:u,last_name:m}=e;this.userForm.get("email")?.setValue(o),this.userForm.get("first_name")?.setValue(r),this.userForm.get("id")?.setValue(u),this.userForm.get("last_name")?.setValue(m),this.userForm.get("avatar")?.setValue(t)}onOpenUnknownPanel(e){const{id:t,name:o,year:r,color:u,pantone_value:m}=e;this.unknownForm.get("id")?.setValue(t),this.unknownForm.get("name")?.setValue(o),this.unknownForm.get("year")?.setValue(r),this.unknownForm.get("color")?.setValue(u),this.unknownForm.get("pantone_value")?.setValue(m)}onRemoveUnknown(e){this.unknownService.removeUnknown(e).subscribe(()=>{localStorage.setItem("unknownId",JSON.stringify(e)),this.unknownDetails=this.unknownDetails.filter(t=>t.id!==JSON.parse(localStorage.getItem("unknownId")))})}onRemoveUser(e){this.userService.removeUser(e).subscribe(()=>{localStorage.setItem("userId",JSON.stringify(e)),this.userDetails=this.userDetails.filter(t=>t.id!==JSON.parse(localStorage.getItem("userId")))})}onSubmitUserForm(e){if(e===this.userForm.get("id")?.value){const t={id:this.userForm.get("id")?.value,first_name:this.userForm.get("first_name")?.value,last_name:this.userForm.get("last_name")?.value,email:this.userForm.get("email")?.value};this.userService.changeUserData(t).subscribe(o=>{this.userDetails.forEach(r=>{if(r.id===o.id){const{email:u,first_name:m,last_name:x}=o;r.email=u,r.first_name=m,r.last_name=x}})})}}onSubmitunknownForm(e){if(e===this.unknownForm.get("id")?.value){const t={id:this.unknownForm.get("id")?.value,name:this.unknownForm.get("name")?.value,year:this.unknownForm.get("year")?.value,color:this.unknownForm.get("color")?.value,pantone_value:this.unknownForm.get("pantone_value")?.value};this.unknownService.changeUnknownData(t).subscribe(o=>{this.unknownDetails.forEach(r=>{if(r.id===o.id){const{name:u,year:m,color:x,pantone_value:M}=o;r.name=u,r.year=m,r.color=x,r.pantone_value=M}})})}}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(v.n),n.Y36(g.K),n.Y36(a.qu))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-accordion"]],inputs:{users:"users",unknown:"unknown"},decls:2,vars:2,consts:[["class","users-cont",4,"ngIf"],["class","unknown-cont",4,"ngIf"],[1,"users-cont"],["multi","false"],["class","users-panel",3,"closed","opened",4,"ngFor","ngForOf"],[1,"users-panel",3,"closed","opened"],[1,"user-info-cont"],[1,"avatar-wrap"],["alt","",3,"src"],[1,"desc-wrap"],[1,"email"],["mat-raised-button","",1,"remove",3,"click"],["mat-raised-button","",1,"change",3,"click"],[4,"ngIf"],[1,"change-data-cont",3,"formGroup","ngSubmit"],["matInput","","formControlName","first_name",3,"value"],["matInput","","formControlName","last_name",3,"value"],["matInput","","formControlName","email",3,"value"],[1,"btns-block"],["mat-raised-button","","type","submit",1,"change",3,"disabled"],["mat-raised-button","",1,"cancel",3,"click"],[1,"unknown-cont"],["class","unknowns-panel",3,"closed","opened",4,"ngFor","ngForOf"],[1,"unknowns-panel",3,"closed","opened"],[1,"unknown-info-cont"],[1,"year"],[1,"color"],[1,"pantone"],["matInput","","type","number","formControlName","year",3,"value"],["class","invalid-message",4,"ngIf"],["matInput","","formControlName","color",3,"value"],["matInput","","formControlName","pantone_value",3,"value"],[1,"invalid-message"]],template:function(e,t){1&e&&(n.YNc(0,A,3,1,"div",0),n.YNc(1,F,3,1,"div",1)),2&e&&(n.Q6J("ngIf",t.userDetails),n.xp6(1),n.Q6J("ngIf",t.unknownDetails))},dependencies:[l.sg,l.O5,p.KE,p.hX,_.Nt,f.pp,f.ib,f.yz,f.yK,w.lW,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.sg,a.u,l.rS],styles:[".users-panel[_ngcontent-%COMP%], .unknowns-panel[_ngcontent-%COMP%]{margin:20px}.user-info-cont[_ngcontent-%COMP%], .unknown-info-cont[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.change-data-cont[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:40px}.change[_ngcontent-%COMP%], .remove[_ngcontent-%COMP%]{margin-right:20px}"]}),i})()},4396:(h,d,s)=>{s.d(d,{n:()=>g});var a=s(6448),n=s(2223),v=s(3144);let g=(()=>{class l{constructor(_){this.http=_,this.unknown="/unknown"}getUnknown(){return this.http.get(a.b.MainAPI+this.unknown)}removeUnknown(_){return this.http.delete(`${a.b.MainAPI}${this.unknown}/${_}`)}changeUnknownData(_){return this.http.put(`${a.b.MainAPI}${this.unknown}/${_.id}`,_)}}return l.\u0275fac=function(_){return new(_||l)(n.LFG(v.eN))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},4758:(h,d,s)=>{s.d(d,{K:()=>g});var a=s(6448),n=s(2223),v=s(3144);let g=(()=>{class l{constructor(_){this.http=_,this.users="/users?page=2",this.userDel="/users"}getUsers(){return this.http.get(a.b.MainAPI+this.users)}removeUser(_){return this.http.delete(`${a.b.MainAPI}${this.userDel}/${_}`)}changeUserData(_){return this.http.put(`${a.b.MainAPI}${this.userDel}/${_.id}`,_)}}return l.\u0275fac=function(_){return new(_||l)(n.LFG(v.eN))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);