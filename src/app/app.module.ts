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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesService } from './cursos/services/courses.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    APP_ROUTING,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthService,
    LoginActivateGuard,
    LogoutActivateGuard,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
