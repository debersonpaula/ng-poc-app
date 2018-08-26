import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

const materials = [
    MatInputModule,
    MatFormFieldModule,
];

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialsModule { }
