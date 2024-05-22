import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

import { Job, JobDetail } from '@models/api/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  private readonly BASE_PATH = 'jobs';

  constructor() {}

  private readonly jobs$: BehaviorSubject<Array<Job>> = new BehaviorSubject<Array<Job>>([]);

  getJobs(): Observable<Array<Job>> {
    if (this.jobs$.getValue().length !== 0) {
      return of(this.jobs$.getValue());
    }
    return this.httpClient.get<Array<Job>>(`${this.BASE_PATH}`).pipe(
      tap(jobs => {
        this.jobs$.next(jobs);
      })
    );
  }

  getJobByID(id: number): Observable<JobDetail> {
    return this.httpClient.get<JobDetail>(`${this.BASE_PATH}/${id}`);
  }
}
