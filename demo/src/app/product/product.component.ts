import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductService } from 'src/app/services/products.service';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products?: Products[];

  constructor(public productService: ProductService, public signinService: SigninService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(){
    this.productService.getAll()
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getProduct(product: Products){
    
  }

  addProduct(){
    
  }

}
