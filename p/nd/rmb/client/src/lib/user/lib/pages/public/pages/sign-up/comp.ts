import { Component, ViewEncapsulation } from '@angular/core';
export const ROOT_SELECTOR = 'sign-up';
@Component({
    selector: ROOT_SELECTOR,
    templateUrl: 'view.html',
    styleUrls: [ './styles.less' ],
    encapsulation: ViewEncapsulation.None
})
export class SignUpComp {
    constructor(
    ) {
    }
}