import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {HeaderComponent} from '../../core/header/header.component';
import {FooterComponent} from '../../core/footer/footer.component';
import {LogoComponent} from '../../core/logo/logo.component';
import {MatButtonModule} from '@angular/material/button';
import {HomePageModule} from '../home-page/home-page.module';

@NgModule({
    declarations: [
        MainComponent,
        HeaderComponent,
        FooterComponent,
        LogoComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        MatButtonModule,
        HomePageModule
    ]
})
export class MainModule {
}
