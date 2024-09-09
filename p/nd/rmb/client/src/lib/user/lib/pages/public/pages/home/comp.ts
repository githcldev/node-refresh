import { Component, ViewEncapsulation } from '@angular/core';
export const ROOT_SELECTOR = 'home';
@Component({
    selector: ROOT_SELECTOR,
    templateUrl: 'view.html',
    styleUrls: [ './styles.less' ],
    encapsulation: ViewEncapsulation.None
})
export class HomeComp {
    constructor(
    ) {
    }
}