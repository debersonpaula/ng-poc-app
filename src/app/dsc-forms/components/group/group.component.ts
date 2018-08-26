import { Component, forwardRef } from '@angular/core';
import { FormGroupComponent } from '../../controller/controller.component';

@Component({
  selector: 'dsc-group',
  template: '<ng-content></ng-content>',
  styles: [''],
  providers: [{ provide: FormGroupComponent, useExisting: forwardRef(() => GroupComponent) }],
})
export class GroupComponent extends FormGroupComponent {
  /**
   * Get Raw Value from FormGroup
   */
  data() {
    return this.group.getRawValue();
  }
}
