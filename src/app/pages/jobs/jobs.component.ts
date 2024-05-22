import { Component } from '@angular/core';

import { RoutesConfig } from '@global/routes';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
  RoutesConfig = RoutesConfig;
}
