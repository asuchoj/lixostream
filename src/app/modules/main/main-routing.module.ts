import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';

const routes: Routes = [
    {
        path: '', component: MainComponent, children: [
            {
                path: '',
                loadChildren: () => import('../home-page/home-page.module').then(m => m.HomePageModule),
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
