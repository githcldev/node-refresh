import { Component } from '@angular/core';
import { AuthService } from '../../../../../../app/helper/sharedModule/services/auth/index';
export const ROOT_SELECTOR = 'login-captcha';
@Component({
    selector: ROOT_SELECTOR,
    templateUrl: 'view.html',
})
export class LoginCaptchaComp {
    constructor(private authService: AuthService) {
    }
    login(){
        this.authService.login()
    }
}