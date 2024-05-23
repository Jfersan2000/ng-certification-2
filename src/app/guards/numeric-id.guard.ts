import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoutesConfig } from '@global/routes';

export const NumericIdGuard: CanActivateFn = route => {
  const router = inject(Router);

  const id = route.paramMap.get('id');

  return (id && !isNaN(Number(id))) || router.parseUrl(RoutesConfig.JOBS.title);
};
