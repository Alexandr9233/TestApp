import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared-module/shared/shared.module';
import { UnknownComponent } from './components/unknown/unknown.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: '', component: UnknownComponent}]

@NgModule({
  declarations: [UnknownComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})

export class UnknownModule { }