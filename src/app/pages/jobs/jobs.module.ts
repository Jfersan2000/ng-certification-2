import { NgModule } from '@angular/core';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';

import { SharedModule } from '@modules/shared.module';

@NgModule({
  imports: [JobsRoutingModule, SharedModule],
  declarations: [JobsComponent]
})
export class JobsModule {}
