import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathCurriculumComponent } from './math-curriculum.component';
import { ComplexNumbersComponent } from './pages/complex-numbers/complex-numbers.component';

const routes: Routes = [{ path: '', component: MathCurriculumComponent },
{path: 'complex-numbers', component: ComplexNumbersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathCurriculumRoutingModule { }
export const routingComponents = [MathCurriculumComponent, ComplexNumbersComponent]
