import { Component, forwardRef, Input } from '@angular/core';
import { FormControlComponent } from '../../controller/controller.component';
import { IOptions } from '../models/interface';

@Component({
  selector: 'dsc-select',
  template: `
    <mat-form-field>
      <mat-select [placeholder]="placeholder" [formControl]="control">
        <mat-option *ngFor="let option of options" [value]="option.value">
          {{option.caption}}
        </mat-option>
      </mat-select>
    </mat-form-field>`,
  styles: [`
    .mat-form-field {
      width: 100%;
    }
  `],
  providers: [{ provide: FormControlComponent, useExisting: forwardRef(() => SelectComponent) }],
})
export class SelectComponent extends FormControlComponent {
  @Input() options: IOptions[] = [];
}
