import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnalyzeComponent } from './analyze/analyze.component';
import { MomentComponent } from './moment/moment.component';
import { ChartsComponent } from './charts/charts.component';
import { WorkComponent } from './work/work.component';

import { NotFoundComponent } from '../../shared/exception/not-found/not-found.component';
import { ErrorPageComponent } from '../../shared/exception/error-page/error-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'analyze', pathMatch: 'full'},
  {path: 'analyze', component: AnalyzeComponent},
  {path: 'moment', component: MomentComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'work', component: WorkComponent},
  {path: '400', component: NotFoundComponent},
  {path: '500', component: ErrorPageComponent},
  {path: '**', redirectTo: '400', pathMatch: 'full'},
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    AnalyzeComponent,
    MomentComponent,
    ChartsComponent,
    WorkComponent]
})
export class DashboardRoutingModule {
}
