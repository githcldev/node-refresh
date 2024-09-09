import { Routes } from '@angular/router';
import { LoginPassComp } from '../pages/login/pass/comp';
import { LoginCaptchaComp } from '../pages/login/captcha/comp';
import { LoginUnComp } from '../pages/login/un/comp';
import { LoginComp } from '../pages/login/comp';
import { HomeComp } from '../pages/home/comp';
import { AboutComp } from '../pages/about/comp';
import { SignUpComp } from '../pages/sign-up/comp';
import { NotFoundComp } from '../pages/not-found/comp';
import { PassGuard } from './pass-gaurd';
import { CaptchaGuard } from './captcha-gaurd';
export const PublicRoutes: Routes = [
  { path: 'login', component: LoginComp },
  { path: 'login-un', component: LoginUnComp },
  { path: 'login-pass', component: LoginPassComp, canActivate: [ PassGuard ] },
  { path: 'login-captcha', component: LoginCaptchaComp, canActivate: [ CaptchaGuard ] },
  { path: 'signup', component: SignUpComp },
  { path: 'home', component: HomeComp },
  { path: 'about', component: AboutComp },
  { path: '**', component: NotFoundComp }
];