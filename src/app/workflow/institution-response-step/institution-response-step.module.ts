import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionResponseStepRoutingModule } from './institution-response-step-routing.module';
import { InstitutionResponseStepComponent } from './institution-response-step.component';


@NgModule({
  declarations: [
    InstitutionResponseStepComponent
  ],
  imports: [
    CommonModule,
    InstitutionResponseStepRoutingModule
  ]
})
export class InstitutionResponseStepModule { }
