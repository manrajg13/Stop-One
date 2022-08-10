import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductService } from 'src/app/services/products.service';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products?: Products[];

  constructor(public productService: ProductService, public signinService: SigninService) { }

  product: Products = {
    name: '',
    description: '',
    price: 0
  };
  submitted = false;

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

  addProduct(){
    const data = {
      name: this.product.name,
      price: this.product.price,
      description: this.product.description
    };

    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    
  }
}
