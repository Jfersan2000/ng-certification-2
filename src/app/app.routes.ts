import { Routes } from '@angular/router';

import { RoutesConfig } from '@global/routes';

export const routes: Routes = [
  {
    path: RoutesConfig.EMPTY.path,
    redirectTo: RoutesConfig.JOBS.path,
    pathMatch: 'full'
  },
  {
    path: RoutesConfig.JOBS.path,
    title: RoutesConfig.JOBS.title,
    loadChildren: () => import('@pages/jobs/jobs.module').then(m => m.JobsModule)
  },
  {
    path: RoutesConfig.WILDCARD.path,
    redirectTo: RoutesConfig.JOBS.path
  }
];
