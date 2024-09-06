import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProtectedRoutes } from './routes'
@NgModule({
    imports: [
        RouterModule.forChild(ProtectedRoutes),
    ],
    exports: [
        RouterModule,
    ],
})
export class ProtectedRoutingModule {
}
