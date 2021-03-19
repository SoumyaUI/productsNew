import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: any = [];
  @Output() getProduct = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  getDetails(product){
    this.getProduct.emit(product);
  }

}
