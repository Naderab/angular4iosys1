import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id!:number;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
  }

}
