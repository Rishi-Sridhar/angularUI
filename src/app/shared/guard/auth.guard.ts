import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('isLoggedin')) {
            console.log('Logged in');
            return true;
        } else {

            this.router.navigate(['/login']);
            console.log('Logged out');

            return false;
        }

    }
}
