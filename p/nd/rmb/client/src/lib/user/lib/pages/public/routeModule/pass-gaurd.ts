import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CredentialValidtorService } from '../../../../app/helper/sharedModule/services/validation/credential';
@Injectable()
export class PassGuard implements CanActivate {
    constructor(
        private credentialValidtorService: CredentialValidtorService,
        private router: Router,
    ) {
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.credentialValidtorService.isUn()
            .then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true;
                    } else {
                        this.router.navigate(['/login-un']);
                    }
                },
            );
    }
}