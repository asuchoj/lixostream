import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AboutProjectCardComponent} from './components/about-project-card/about-project-card.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {StartStreamComponent} from './components/start-stream/start-stream.component';
import {ContactDevelopersComponent} from './components/contact-developers/contact-developers.component';
import {StarRatingComponent} from './components/star-rating/star-rating.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        HomePageComponent,
        AboutProjectCardComponent,
        ProductCardComponent,
        StartStreamComponent,
        ContactDevelopersComponent,
        StarRatingComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
    ]
})
export class HomePageModule {
}
