import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionReviewStepRoutingModule } from './institution-review-step-routing.module';
import { InstitutionReviewStepComponent } from './institution-review-step.component';


@NgModule({
  declarations: [
    InstitutionReviewStepComponent
  ],
  imports: [
    CommonModule,
    InstitutionReviewStepRoutingModule
  ]
})
export class InstitutionReviewStepModule { }
