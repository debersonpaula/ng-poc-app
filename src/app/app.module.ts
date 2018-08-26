import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// import { TBase, TBase2 } from './test/t1';

import { DscFormsModule } from './dsc-forms';

@NgModule({
  declarations: [
    AppComponent,
    // TBase, TBase2
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DscFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
