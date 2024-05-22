import { CanActivateFn } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (user) {
    return true;
  }
  return false;
};
