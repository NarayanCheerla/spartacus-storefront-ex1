import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlateComponent } from './slate/slate.component';
import { CmsPageGuards, PageLayoutComponent } from '@spartacus/storefront';


const routes: Routes = [
    {
        path:'slate',
        component: SlateComponent,
        // canActivate: [CmsPageGuards]
    },
    {
        path:'questions',
        component: PageLayoutComponent,
        data: {
            
        }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }