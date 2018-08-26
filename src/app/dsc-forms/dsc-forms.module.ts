import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialsModule } from './material/material.module';
import { InputComponent } from './components/input/input.component';
import { GroupComponent } from './components/group/group.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  declarations: [
    GroupComponent,
    InputComponent,
    SelectComponent
  ],
  exports: [
    GroupComponent,
    InputComponent,
    SelectComponent
  ]
})
export class DscFormsModule { }
