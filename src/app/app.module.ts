import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { APP_ROUTING } from './app.routes';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthService } from './services/auth.service';
import { LoginActivateGuard } from './guards/login-activate-guard.service';
import { LogoutActivateGuard } from './guards/logout-activate-guard.service';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthService,
    LoginActivateGuard,
    LogoutActivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
