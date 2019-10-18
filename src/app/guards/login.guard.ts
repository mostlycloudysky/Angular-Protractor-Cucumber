import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthHelper} from '../core/helpers/auth.helper';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // go to default page if the user is already logged in
    if (AuthHelper.isUserLogged()) {
      this.router.navigate(['/'], {queryParams: {returnUrl: state.url}});
    }
    return true;
  }
}
