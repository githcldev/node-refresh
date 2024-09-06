import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComp } from './indexPage/comp'
const appRoutes: Routes = [
    { path: '', component: IndexComp }
];
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes
        // ,{ enableTracing: true } // <-- debugging purposes only
        ),
        // RouterModule.forRoot(appRoutes, { useHash: true }),
        // this is using by fallback of the 404 error state of the index
        // redirection for the not configured servers or old browser
    ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {}