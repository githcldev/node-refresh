import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../../../../app/helper/sharedModule/services/auth/index';
export const ROOT_SELECTOR = 'login-pass';
@Component({
    selector: ROOT_SELECTOR,
    templateUrl: 'view.html',
})
export class LoginPassComp {
    constructor(private authService: AuthService) {
    }
    login(){
        this.authService.login()
    }
}