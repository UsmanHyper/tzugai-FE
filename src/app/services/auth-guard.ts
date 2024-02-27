import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';


@Injectable()
export class AuthGuardService implements CanActivate {
    is_authenticated: boolean = false;

    constructor(private router: Router, private apiService: ApiService, private auth: AuthService,) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.isLoggedin()) {
            this.is_authenticated = true;
        } else {
            this.router.navigate(['/login']);
            this.is_authenticated = false;
        }
        return this.is_authenticated;
    }
    isLoggedin() {
        return localStorage.getItem('token') != 'undefined' && localStorage.getItem('token') != null;
    }
}
