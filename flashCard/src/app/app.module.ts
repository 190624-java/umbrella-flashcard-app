import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FcAddComponent } from './fc-add/fc-add.component';
import { FcShowComponent } from './fc-show/fc-show.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FcAddComponent,
    FcShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
