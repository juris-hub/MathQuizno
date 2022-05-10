import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathCurriculumRoutingModule, routingComponents } from './math-curriculum-routing.module';



@NgModule({
  declarations: [
    routingComponents
  ],
  imports: [
    CommonModule,
    MathCurriculumRoutingModule
  ]
})
export class MathCurriculumModule { }
