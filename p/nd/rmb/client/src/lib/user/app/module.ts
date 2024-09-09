import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing.module';
import { SharedModule } from './helper/sharedModule/module';
import { ProtectedModule } from '../lib/pages/protected/module';
import { PublicModule } from '../lib/pages/public/module';
import { AppComp } from './comp';
import { IndexComp } from './indexPage/comp';
@NgModule({
    declarations: [
        AppComp, IndexComp
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        ProtectedModule,
        PublicModule,
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: '/' + (window.location.pathname.split('/')[1] || '')
        },
    ],
    bootstrap: [ AppComp ],
})
export class AppModule {
}
