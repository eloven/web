import { NgModule, SkipSelf, Optional } from '@angular/core';

@NgModule({
    declarations: [],
    imports: [],
    providers: [
        {
            provide: 'BASE_API', useValue: {
                host: 'http: 127.0.0.1:3000/api/'
            }
        }
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parent: CoreModule) {
        if (parent) {
            throw Error('模块已经存在');
        }
    }
}
