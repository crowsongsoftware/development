import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DrawerModule } from '@crowsong/drawer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
