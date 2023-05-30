import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth.guard';


const routes: Routes = [{
  path: 'users',
  pathMatch: 'full',
  loadChildren: () =>
    import('./users/users.module').then(
      (m) => m.UsersModule
    ),
    canActivate: [AuthGuardService]
    },
    {
        path: 'unknown',
        pathMatch: 'full',
        loadChildren: () =>
          import('./unknown/unknown.module').then(
            (m) => m.UnknownModule
          ),
          canActivate: [AuthGuardService]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule {}