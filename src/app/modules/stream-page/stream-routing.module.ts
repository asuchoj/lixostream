import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StreamPageComponent} from './stream-page.component';

const routes: Routes = [
    {path: '', component: StreamPageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StreamRoutingModule {
}
