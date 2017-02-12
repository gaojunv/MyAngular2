import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,CanLoad, Route } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate,CanLoad {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('token')) {
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }

  canLoad(route: Route): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
