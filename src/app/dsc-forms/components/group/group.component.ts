import { Component, OnInit, forwardRef, ChangeDetectorRef } from '@angular/core';
import { FormGroupComponent } from '../../controller/controller.component';
import { of } from 'rxjs';

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
    // const result = this.group.getRawValue();
    // this.cd.detectChanges();
    // return result;
    return of(this.group.getRawValue());
  }

  ngAfterViewInit(){
    this.cd.detectChanges();
    super.ngAfterViewInit();
  }
}
