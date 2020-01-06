import { Component, OnInit, Input } from '@angular/core';
import { Product, CartService } from '@spartacus/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit {

  @Input() product: Product;

  constructor(private cartService: CartService, private _route: ActivatedRoute) { }

  quantity = 1;

  ngOnInit() {
  }

  addToCart(productCode){
    this.cartService.addEntry(productCode, this.quantity);
  }

}
