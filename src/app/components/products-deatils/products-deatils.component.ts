import { Component, OnInit, Input } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-products-deatils',
  templateUrl: './products-deatils.component.html',
  styleUrls: ['./products-deatils.component.css']
})
export class ProductsDeatilsComponent implements OnInit {
  @Input() product: any = {};
  slides = [{ 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }];
  constructor() { }

  get sildeImages() {

    const { images } = this.product;
    return images.map(img => ({ image: img.href }));
  }

  ngOnInit(): void {
  }

}
