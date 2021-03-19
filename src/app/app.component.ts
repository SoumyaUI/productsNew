import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'products-ng';
  showModal: boolean = false;
  details ="";
  products : any;
  heroImage: string;
  indexNumber=0;
  product = {};

  constructor(private appService: AppService){}

  ngOnInit() {
    this.appService.showProducts().subscribe(
      data=>{
        this.products = data['groups'];
        this.heroImage = this.products[this.indexNumber]['hero']
        this.product =  this.products[0]

      }
    )
  }

  closedModal(){
    this.product = {};
    this.showModal = false;
  }

  getProduct(product){
    this.product = product;
    this.showModal = true;
  }
}
