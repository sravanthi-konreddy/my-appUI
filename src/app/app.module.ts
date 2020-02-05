import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { UserIdleModule } from 'angular-user-idle';
import { HttpClientModule } from '@angular/common/http';
import { ModalDismissReasons,NgbModule,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);
//import {NgbdModalContent} from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    LogoutComponent
   // NgbModal,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    HttpClientModule,
    NgbModule,
    
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'welcome/:id', component: WelcomeComponent },
      { path: 'logout', component: LogoutComponent },
    ]),
    UserIdleModule.forRoot({idle: 60, timeout: 30, ping: 12}),
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
