import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const materials = [
  MatInputModule,
  MatSelectModule
];

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialsModule { }
