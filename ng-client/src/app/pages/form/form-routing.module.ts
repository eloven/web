import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BasicFormComponent } from './basic-form/basic-form.component'

const routes: Routes = [{ path: '', data: { name: 'basic-form' }, component: BasicFormComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {}
