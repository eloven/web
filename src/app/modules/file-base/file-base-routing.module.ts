import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FileBaseComponent} from './file-base.component';

const routes: Routes = [
    {path: '', component: FileBaseComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FileBaseRoutingModule {
}
