import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteConfirmationRoutingModule } from './remote-confirmation-routing.module';
import { RemoteConfirmationComponent } from './remote-confirmation.component';


@NgModule({
  declarations: [
    RemoteConfirmationComponent
  ],
  imports: [
    CommonModule,
    RemoteConfirmationRoutingModule
  ]
})
export class RemoteConfirmationModule { }
