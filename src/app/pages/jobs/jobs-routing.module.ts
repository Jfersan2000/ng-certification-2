import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsComponent } from './jobs.component';

import { RoutesConfig } from '@global/routes';
import { NumericIdGuard } from '@guards/numeric-id.guard';

const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
    children: [
      {
        path: RoutesConfig.JOBS.children.LIST.path,
        title: RoutesConfig.JOBS.children.LIST.title,
        loadComponent: () => import('@components/job-list/job-list.component').then(c => c.JobListComponent)
      },
      {
        path: RoutesConfig.JOBS.children.FAVORITES.path,
        title: RoutesConfig.JOBS.children.FAVORITES.title,
        loadComponent: () => import('@components/favorites/favorites.component').then(c => c.FavoritesComponent)
      },
      {
        path: RoutesConfig.JOBS.children.DETAIL.path,
        title: RoutesConfig.JOBS.children.DETAIL.title,
        loadComponent: () => import('@components/job-detail/job-detail.component').then(c => c.JobDetailComponent),
        canActivate: [NumericIdGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule {}
