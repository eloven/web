import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {HeaderComponent} from '../components/header/header.component';
import {FooterComponent} from '../components/footer/footer.component';
import {SearchBarComponent} from '../components/search-bar/search-bar.component';
// 第三方模块
import {HotTableModule} from '@handsontable/angular';
@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SearchBarComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        DragDropModule,
        HotTableModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        DragDropModule,
        HeaderComponent,
        FooterComponent,
        SearchBarComponent,
        HotTableModule,
    ]
})
export class SharedModule {
}
