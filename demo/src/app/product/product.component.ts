import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductService } from 'src/app/services/products.service';
import { SigninService } from '../services/signin.service';
import { ActivatedRoute } from '@angular/router';
import { ObjectId } from 'mongodb';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  cost: number;
  bought: boolean;
  reported: boolean;

  products?: Products[];

  constructor(public productService: ProductService, public signinService: SigninService, private route: ActivatedRoute) { 
    this.cost = 0;
    this.bought = false;
    this.reported = false;
  }

  product: Products = {
    name: '',
    description: '',
    price: 0
  };

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params['_id']);
  }

  getProduct(_id: ObjectId){
    this.productService.get(_id)
      .subscribe(
        data => {
          this.product = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  addSubtotal() {
    this.cost += this.product.price!;
    localStorage.setItem("purchased", "" + this.cost);
    this.bought = true;
  }

  reportProduct() {
    this.reported = true;
  }

}
