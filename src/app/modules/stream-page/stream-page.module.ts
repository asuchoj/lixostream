import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StreamPageComponent} from './stream-page.component';
import {StreamRoutingModule} from './stream-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {StreamService} from './services/stream.service';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [StreamPageComponent],
    imports: [
        CommonModule,
        StreamRoutingModule,
        MatButtonModule,
        FormsModule
    ],
    providers: [
        StreamService
    ]
})
export class StreamPageModule {
}
