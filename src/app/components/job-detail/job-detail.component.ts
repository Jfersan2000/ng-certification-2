import { Component, Input, OnInit, SecurityContext, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

import { RoutesConfig } from '@global/routes';

import { SharedModule } from '@modules/shared.module';

import { JobsService } from '@services/api/jobs.service';

import { JobDetail } from '@models/api/job.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit {
  @Input({ required: true }) id!: number;

  private readonly router: Router = inject(Router);
  private readonly domSanitizer: DomSanitizer = inject(DomSanitizer);
  private readonly jobsService: JobsService = inject(JobsService);

  job!: JobDetail;

  RoutesConfig = RoutesConfig;

  ngOnInit(): void {
    this.jobsService
      .getJobByID(this.id)
      .pipe(
        catchError((response: HttpErrorResponse) => {
          this.router.navigate([RoutesConfig.JOBS.path]);

          return throwError(() => new Error(response.message));
        })
      )
      .subscribe(job => {
        this.job = job;

        this.job.description = this.domSanitizer.sanitize(SecurityContext.HTML, this.job.description) ?? '';
      });
  }
}
