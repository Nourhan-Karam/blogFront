import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../serves/auth.service';

export const authGuard: CanActivateFn = (route, state) => {


  let _Router =inject(Router)
  let auth = inject(AuthService)
  if(auth.isLoggedIn()){
    return true
  }else{
    _Router.navigate(['/login'])
    return false
  }


};
