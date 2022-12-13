import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product = new Product();
  constructor(private productService:ProductService,private router:Router,private consumerProduct:ConsumerProductService) { }

  ngOnInit(): void {
  }

  ajouter(){
    console.log(this.product)
    //this.productService.addProduct(this.product);
    //this.router.navigateByUrl('/products')
    this.consumerProduct.addProduct(this.product).subscribe({
      next : ()=>this.router.navigateByUrl('/products')
    })
  }

}
