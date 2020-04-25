import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StarRatingComponent} from './components/star-rating/star-rating.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        StarRatingComponent
    ],
    exports: [
        StarRatingComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class SharedModule {
}
