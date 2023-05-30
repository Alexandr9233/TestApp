import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PagesRoutingModule } from "./pages-routing.module";
import { AuthComponent } from "./auth/auth.component";
import { UnknownComponent } from "./unknown/components/unknown/unknown.component";
import { SharedModule } from "../shared/modules/shared-module/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    {path: 'auth', component: AuthComponent},
    {path: 'auth/register', component: RegisterComponent},
]

@NgModule({
    declarations: [
      AuthComponent,
      RegisterComponent    
    ],
    imports: [
        PagesRoutingModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [PagesRoutingModule],
    providers: [],
  })

  export class PagesModule {}