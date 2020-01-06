import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StorefrontModule } from '@spartacus/storefront';

import { AppComponent } from './app.component';
import { RatingModule } from 'primeng/rating';
import { SpinnerModule } from 'primeng/spinner';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.router.module';
import { SlateComponent } from './slate/slate.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
@NgModule({
  declarations: [AppComponent, SlateComponent, ProductSummaryComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RatingModule,
    FormsModule,
    SpinnerModule,
    CarouselModule,
    ButtonModule,
    StorefrontModule.withConfig({
      server: {
        baseUrl: 'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
