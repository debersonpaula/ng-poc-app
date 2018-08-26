import { Component, ViewChild, OnInit } from '@angular/core';
import { GroupComponent } from './dsc-forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('master') group: GroupComponent;

  ngOnInit() {
  }

  showData() {
    console.log(this.group.data());
  }
}
