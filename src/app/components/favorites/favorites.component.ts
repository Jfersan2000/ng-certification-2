import { Component, OnInit, inject } from '@angular/core';

import { JobsService } from '@services/api/jobs.service';

import { Job } from '@models/api/job.model';

import { JobItemComponent } from '@components/job-item/job-item.component';
import { FavoritesService } from '@services/favorites.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [JobItemComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  private readonly favoritesService: FavoritesService = inject(FavoritesService);
  private readonly jobsService: JobsService = inject(JobsService);

  favorites?: Array<Job>;

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe(jobs => {
      this.favorites = jobs.filter(job => this.favoritesService.contains(job.id));
    });
  }
}
