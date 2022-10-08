import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WorkflowComponent } from './workflow.component';
import { WorkflowRoutingModule } from './workflow.routing.module';



@NgModule({
  declarations: [
    WorkflowComponent
  ],
  imports: [
    CommonModule,
    WorkflowRoutingModule,
  ]
})
export class WorkflowModule { }
