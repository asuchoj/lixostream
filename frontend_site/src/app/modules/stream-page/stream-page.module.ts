import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StreamPageComponent} from './stream-page.component';
import {StreamRoutingModule} from './stream-routing.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [StreamPageComponent],
    imports: [
        CommonModule,
        StreamRoutingModule,
        MatButtonModule
    ]
})
export class StreamPageModule {
}
