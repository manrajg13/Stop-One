import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductService } from 'src/app/services/products.service';
import { SigninService } from '../services/signin.service';
import { ActivatedRoute } from '@angular/router';
import { ObjectId } from 'mongoose';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products?: Products[];

  constructor(public productService: ProductService, public signinService: SigninService, private route: ActivatedRoute) { }

  product: Products = {
    id_: '',
    name: '',
    description: '',
    price: 0
  };

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params['id_']);
  }

  getProduct(id_: ObjectId){
    console.log(id_);
    this.productService.get(id_)
      .subscribe(
        data => {
          this.product = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
