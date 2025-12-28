import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api-service/api-service';
import { Product } from '../pages/product/product';

@Component({
  selector: 'app-singleview-list',
  imports: [],
  templateUrl: './singleview-list.html',
  styleUrl: './singleview-list.css',
})
export class SingleviewList {

  //declare an arrray
  singleviewlist: any;//Array to hold single view product data

  //Ccreate constructor and intialize apiService
  constructor(private route: ActivatedRoute, private apiService: ApiService,private cdr:ChangeDetectorRef) {}
  ngOnInit() {
    //get the id from route
    const productid = this.route.snapshot.paramMap.get('titleid') || '';
    if (productid) {
    //call the api service to get single product data
    this.apiService.getsingleproduct(productid).subscribe((data) => {
      this.singleviewlist = data;
      this.cdr.detectChanges()
    });
  }

}
}
