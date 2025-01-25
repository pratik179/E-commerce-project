import { Component } from '@angular/core';
import { lehngacholiPage2 } from 'src/Data/Saree/lenghaCholiPage2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
handleAddToCart() {
throw new Error('Method not implemented.');
}
selectedSize: any;
reviews=[1,1,1,1,1]
relatedProducts:any;

ngOnInit(){
  this.relatedProducts = lehngacholiPage2
}
}
