import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../../../app/helper/sharedModule/services/auth/index';
export const ROOT_SELECTOR = 'logout';
@Component({
    selector: ROOT_SELECTOR,
    templateUrl: 'view.html',
})
export class LogoutComp {
    constructor(private authService: AuthService) {
    }
    logout(){
        this.authService.logout()
    }
}