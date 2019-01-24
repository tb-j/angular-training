import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HasRolesGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const currentUserRole = 'admin';
    const { roles } = route.data;
    return roles.includes(currentUserRole);
  }
}
