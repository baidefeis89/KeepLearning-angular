import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
