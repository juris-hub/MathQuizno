import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'math-curriculum', loadChildren: () => import('./modules/math-curriculum/math-curriculum.module').then(m => m.MathCurriculumModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
