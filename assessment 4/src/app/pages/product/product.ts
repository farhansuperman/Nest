import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api-service/api-service';
import {  CommonModule, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ SlicePipe,RouterLink,CommonModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class Product implements OnInit {

  //Array to hold product data
  products: any[] = [];

  //Constructor
  constructor(private apiService: ApiService) {}

  //Initialize component
  ngOnInit(): void {
    //Subscribe to API service to get products
    this.apiService.getproduct().subscribe((data: any[]) => {
      this.products = data;
    });
  }
}
