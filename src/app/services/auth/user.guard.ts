import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
 
  constructor(private router:Router){}
  canActivate(): boolean {
    const isLogged = localStorage.getItem('user_token')

    if (isLogged) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
