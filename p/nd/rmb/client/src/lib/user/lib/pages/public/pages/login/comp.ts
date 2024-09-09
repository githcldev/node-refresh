import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../../../app/helper/sharedModule/services/auth/index';
export const ROOT_SELECTOR = 'login';
@Component({
    selector: ROOT_SELECTOR,
    templateUrl: 'view.html',
    styleUrls: [ './styles.less' ],
    encapsulation: ViewEncapsulation.None
})
export class LoginComp {
    constructor(private authService: AuthService) {
    }
    login(){
        this.authService.login()
    }
}