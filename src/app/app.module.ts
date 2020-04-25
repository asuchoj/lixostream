import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationComponent} from './core/authentication/authentication.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatButtonModule,
        FontAwesomeModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
