import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationComponent} from './core/authentication/authentication.component';

const routes: Routes = [
    {
        path: 'auth',
        component: AuthenticationComponent
    },
    {
        path: '',
        loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
