import { Component, Input, inject } from '@angular/core';

import { RoutesConfig } from '@global/routes';

import { SharedModule } from '@modules/shared.module';

import { FavoritesService } from '@services/favorites.service';

import { Job } from '@models/api/job.model';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.css'
})
export class JobItemComponent {
  @Input({ required: true }) job!: Job;
  @Input() showStar: boolean = true;

  private readonly favoritesService: FavoritesService = inject(FavoritesService);

  RoutesConfig = RoutesConfig;

  toggleFavorite(): void {
    this.favoritesService.toggleFavorite(this.job.id);
  }

  get marked(): boolean {
    return this.favoritesService.contains(this.job.id);
  }
}
