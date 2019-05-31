import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AppMaterialModule } from '../../shared/app.material.module';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../../shared/exception/not-found/not-found.component';
import { ErrorPageComponent } from '../../shared/exception/error-page/error-page.component';
import { BasicFormComponent } from './table-form/basic-form/basic-form.component';
import { StepFormComponent } from './table-form/step-form/step-form.component';
import { ReactiveFormComponent } from './table-form/reactive-form/reactive-form.component';
import { TableListComponent } from './table-form/table-list/table-list.component';
import { WriteTableComponent } from './table-form/write-table/write-table.component';
import { ListComponent } from './table-form/list/list.component';
import { CardListComponent } from './table-form/card-list/card-list.component';
import { BasicDetailComponent } from './detail-show/basic-detail/basic-detail.component';
import { InfoDetailComponent } from './detail-show/info-detail/info-detail.component';
import { SuccessComponent } from './detail-show/success/success.component';
import { ErrorShowComponent } from './detail-show/error-show/error-show.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { SearchListComponent } from './table-form/search-list/search-list.component';

const routes: Routes = [
  {path: '', redirectTo: '400', pathMatch: 'full'},
  {path: 'basic-form', component: BasicFormComponent},
  {path: 'step-form', component: StepFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'table-list', component: TableListComponent},
  {path: 'write-table', component: WriteTableComponent},
  {path: 'list', component: ListComponent},
  {path: 'card-list', component: CardListComponent},
  {path: 'search-list', component: SearchListComponent},
  {path: 'basic-detail', component: BasicDetailComponent},
  {path: 'info-detail', component: InfoDetailComponent},
  {path: 'error', component: ErrorShowComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'setting', component: UserSettingComponent},
  {path: 'center', component: UserCenterComponent},
  {path: '400', component: NotFoundComponent},
  {path: '500', component: ErrorPageComponent},
  {path: '**', redirectTo: '400', pathMatch: 'full'},
];


@NgModule({
  declarations: [
    BasicFormComponent,
    StepFormComponent,
    ReactiveFormComponent,
    TableListComponent,
    WriteTableComponent,
    ListComponent,
    CardListComponent,
    BasicDetailComponent,
    InfoDetailComponent,
    SuccessComponent,
    ErrorShowComponent,
    UserCenterComponent,
    SearchListComponent,
    UserSettingComponent],
  imports: [
    SharedModule,
    AppMaterialModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
