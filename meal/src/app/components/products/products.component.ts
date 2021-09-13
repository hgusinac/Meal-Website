import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/mocks';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsList = products;
  constructor() {}

  ngOnInit(): void {}
}
