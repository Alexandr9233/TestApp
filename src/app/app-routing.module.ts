import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth.guard';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'app',
  pathMatch: 'full',
},
{path: 'auth', component: AuthComponent},
{
  path: 'app',
  loadChildren: () =>
    import('./pages/pages.module').then((m) => m.PagesModule),
    canActivate: [AuthGuardService]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
