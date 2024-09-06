import { Component, ViewEncapsulation } from '@angular/core';
export const ROOT_SELECTOR = 'about';
@Component({
    selector: ROOT_SELECTOR,
    templateUrl: 'view.html',
    styleUrls: [ './styles.less' ],
    encapsulation: ViewEncapsulation.None
})
export class AboutComp {
    constructor(
    ) {
    }
}