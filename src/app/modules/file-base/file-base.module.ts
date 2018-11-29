import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {FileBaseRoutingModule} from './file-base-routing.module';
import {FileBaseComponent} from './file-base.component';
import {DataSaveService} from '../../service/data-save.service';

@NgModule({
    declarations: [
        FileBaseComponent
    ],
    imports: [
        SharedModule,
        FileBaseRoutingModule
    ],
    providers: [
        DataSaveService,
    ]
})
export class FileBaseModule {
}
