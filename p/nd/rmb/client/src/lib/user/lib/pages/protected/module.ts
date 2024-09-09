import { NgModule } from '@angular/core';
import { SharedModule } from '../../../app/helper/sharedModule/module'
import { ProtectedRoutingModule } from './routeModule/index'
import { AuthGuard } from './routeModule/auth-guard.service';
import { LogoutComp } from './pages/logout/comp';
import { ProfileComp } from './pages/profile/comp';
import { PostsComp } from './pages/posts/comp';
import { PostComp } from './pages/post/comp';
import { PostEditComp } from './pages/post-edit/comp';
@NgModule({
    imports: [
        ProtectedRoutingModule,
        SharedModule
    ],
    providers: [
        AuthGuard
    ],
    declarations: [
        LogoutComp, ProfileComp, PostsComp, PostComp, PostEditComp
    ]
})
export class ProtectedModule { }
