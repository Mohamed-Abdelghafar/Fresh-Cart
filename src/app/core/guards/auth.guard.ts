import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let lead = inject(Router)

  if (localStorage.getItem('user-Token') != null) {
    return true;
  }
  else {
    lead.navigate(['/login'])
    return false
  }
};
