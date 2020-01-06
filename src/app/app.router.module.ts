import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlateComponent } from './slate/slate.component';
import { PageLayoutComponent } from '@spartacus/storefront';


const routes: Routes = [
    {
        path:'slate',
        component: SlateComponent,
    },
    {
        path:'questions',
        component: PageLayoutComponent,
        data: {
            pageLabel: '/faq'
        }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }