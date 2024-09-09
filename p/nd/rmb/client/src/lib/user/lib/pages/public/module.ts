import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/components/button/button';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/components/card/card';
import { PublicRoutes } from './routeModule/routes'
import { SharedModule } from '../../../app/helper/sharedModule/module'
import { LoginComp } from './pages/login/comp';
import { LoginUnComp } from './pages/login/un/comp';
import { LoginPassComp } from './pages/login/pass/comp';
import { LoginCaptchaComp } from './pages/login/captcha/comp';
import { HomeComp } from './pages/home/comp';
import { AboutComp } from './pages/about/comp';
import { SignUpComp } from './pages/sign-up/comp';
import { SignUpFormComp } from './pages/sign-up/form/comp';
import { NotFoundComp } from './pages/not-found/comp';
import { PassGuard } from './routeModule/pass-gaurd';
import { CaptchaGuard } from './routeModule/captcha-gaurd';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    FontAwesomeModule,
    CalendarModule,
    RouterModule.forChild(PublicRoutes),
    SharedModule
  ],
  providers: [
    CaptchaGuard, PassGuard
  ],
  declarations: [
    LoginComp,
    LoginUnComp, LoginPassComp,
    LoginCaptchaComp,
    SignUpComp, SignUpFormComp,
    HomeComp, AboutComp,
    NotFoundComp
  ]
})
export class PublicModule { }
