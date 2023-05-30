import { NgModule } from '@angular/core';
import { AccordionComponent } from 'src/app/shared/components/accordion/accordion.component';
import { MaterialModule } from '../../material/material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    AccordionComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
