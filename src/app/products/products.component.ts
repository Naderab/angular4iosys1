import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ConsumerProductService } from '../services/consumer-product.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title : string = 'Welcome to products page'
  products : Product[] = [];
  searchText:string=""
  constructor(private productService:ProductService,private consumerProduct:ConsumerProductService) { }

  ngOnInit(): void {
    //this.products = this.productService.products;
    this.consumerProduct.getProducts().subscribe({
      next : (data)=>this.products = data,
      error : (error)=>console.log(error),
      complete : () => console.log("I m finishing")
    })
  }

  Buy(id:number){
    this.products.map((produit)=> produit.id == id && produit.quantity--)
  }

  Like(id:number){
    this.products.map((produit)=> produit.id == id && produit.like++)
  }

  search(){
   this.products= this.products.filter((product)=>product.title.match(this.searchText))
  }

  Delete(id:number){
    this.consumerProduct.deleteProduct(id).subscribe({
      next : ()=>this.products = this.products.filter((p)=>p.id != id)
    })
  }

}
