import { Component, ViewEncapsulation } from '@angular/core';
export const ROOT_SELECTOR = 'not-found';
@Component({
    selector: ROOT_SELECTOR,
    templateUrl: 'view.html',
    styleUrls: [ './styles.less' ],
    encapsulation: ViewEncapsulation.None
})
export class NotFoundComp {
    constructor(
    ) {
    }
}