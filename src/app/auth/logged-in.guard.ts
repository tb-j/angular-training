import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // const isLoggedIn = prompt('are you logged in?') === 'yes';
    const isLoggedIn = true;
    if (!isLoggedIn) {
      this.router.navigateByUrl('');
    }
    return isLoggedIn;
  }
}
