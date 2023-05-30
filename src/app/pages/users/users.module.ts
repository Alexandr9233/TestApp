import { NgModule } from "@angular/core";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { UsersComponent } from "./components/users/users.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/modules/shared-module/shared/shared.module";



const routes: Routes = [{path: '', component: UsersComponent}]

@NgModule({
    declarations: [
        UsersComponent,
        UserDetailComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
  })

  export class UsersModule { }