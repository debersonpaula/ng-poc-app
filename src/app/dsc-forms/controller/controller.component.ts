import { Component, AfterViewInit, OnInit, Input, ContentChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'controller-control',
  template: '<ng-content></ng-content>',
  styles: [''],
})
export class FormControlComponent implements AfterViewInit {
  @Input() name = '';
  @Input() placeholder = '';
  public control = new FormControl();
  constructor(/* protected cd: ChangeDetectorRef */) {
  }
  ngAfterViewInit() {
    // this.cd.detectChanges();
  }
}

@Component({
  selector: 'controller-group',
  template: '<ng-content></ng-content>',
  styles: [''],
})
export class FormGroupComponent implements AfterViewInit {
  @Input() name = '';
  @ContentChildren(FormGroupComponent) private _groups: QueryList<FormGroupComponent>;
  @ContentChildren(FormControlComponent) private _controls: QueryList<FormControlComponent>;
  public group = new FormGroup({});

  constructor(/* protected cd: ChangeDetectorRef */) {
  }

  ngAfterViewInit() {
    // this.cd.detectChanges();
    // include groups
    this._groups.forEach(child => {
      if (child != this) {
        this.group.addControl(child.name, child.group);
      }
    });
    // include controls
    this._controls.forEach(child => {
      this.group.addControl(child.name, child.control);
    });
  }
}
