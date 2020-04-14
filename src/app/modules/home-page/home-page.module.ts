import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AboutProjectCardComponent} from './components/about-project-card/about-project-card.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {StartStreamComponent} from './components/start-stream/start-stream.component';
import {ContactDevelopersComponent} from './components/contact-developers/contact-developers.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {SharedModule} from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
    declarations: [
        HomePageComponent,
        AboutProjectCardComponent,
        ProductCardComponent,
        StartStreamComponent,
        ContactDevelopersComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatCardModule,
        SharedModule
    ]
})
export class HomePageModule {
}
