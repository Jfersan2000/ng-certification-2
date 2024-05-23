import { Component, OnInit, inject } from '@angular/core';

import { RoutesConfig } from '@global/routes';

import { SharedModule } from '@modules/shared.module';

import { JobsService } from '@services/api/jobs.service';

import { Job } from '@models/api/job.model';

import { JobItemComponent } from '@components/job-item/job-item.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [SharedModule, JobItemComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {
  private readonly jobsService: JobsService = inject(JobsService);

  jobs?: Array<Job>;

  RoutesConfig = RoutesConfig;

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }
}
