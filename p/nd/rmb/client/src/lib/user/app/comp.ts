import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as _csm from '../../shared/index';
window["_csm"] = _csm;
export const ROOT_SELECTOR = 'app';
@Component({
    selector: ROOT_SELECTOR,
    templateUrl: 'view.html',
    styleUrls: ['./styles/styles.less'],
    encapsulation: ViewEncapsulation.None
})
export class AppComp implements OnInit {
    constructor(private router: Router) {
    }
    onRouteEvents() {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                switch (event.urlAfterRedirects) {
                    default: break;
                }
            }
        });
    }
    ngOnInit() {
        this.onRouteEvents();
        // let _csma = _csm()
        // console.log(_csma.msg())
// debugger;
        let i = _csm('ng').core();
        let j = i.default.core;
        j.consoleHello()
        
        console.log(window["cmsDistributionMode"])
    }
}