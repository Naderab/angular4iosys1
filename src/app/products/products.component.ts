import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title : string = 'Welcome to products page'
  products : Product[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products = [
      {id:1,title:'T-shirt 1',quantity:10,price:200,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/8171/443/800/8171443800_2_4_3.jpg?t=1658758238036'},
      {id:2,title:'T-shirt 2',quantity:0,price:30,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/8171/443/800/8171443800_2_4_3.jpg?t=1658758238036'},
      {id:3,title:'T-shirt 3',quantity:100,price:2,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/8171/443/800/8171443800_2_4_3.jpg?t=1658758238036'},

    ];
  }

  Buy(id:number){
    this.products.map((produit)=> produit.id == id && produit.quantity--)
  }

  Like(id:number){
    this.products.map((produit)=> produit.id == id && produit.like++)
  }

}
