import { Component, forwardRef } from '@angular/core';
import { FormControlComponent } from '../../controller/controller.component';


@Component({
  selector: 'dsc-input',
  template: `
    <mat-form-field>
      <input matInput [placeholder]="placeholder" [formControl]="control">
    </mat-form-field>`,
  styles: [`
    .mat-form-field {
      width: 100%;
    }
  `],
  providers: [{ provide: FormControlComponent, useExisting: forwardRef(() => InputComponent) }],
})
export class InputComponent extends FormControlComponent { }
