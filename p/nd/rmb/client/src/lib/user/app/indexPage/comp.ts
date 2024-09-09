import { Component, OnInit, ViewEncapsulation } from '@angular/core';
export const ROOT_SELECTOR = 'index';
@Component({
    selector: ROOT_SELECTOR,
    templateUrl: 'view.html',
    encapsulation: ViewEncapsulation.None
})
export class IndexComp{
    constructor(
    ) {
    }
}