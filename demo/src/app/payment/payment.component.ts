import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  subtotal: number;
  bought: boolean;

  constructor(public productService: ProductService) {
    this.subtotal = parseInt(localStorage.getItem("purchased")!);
    this.bought = false;
  }

  ngOnInit(): void { }

  clearCart() {
    this.subtotal = 0;
    localStorage.setItem("purchased", "0");
    this.bought = true;
  }
}
