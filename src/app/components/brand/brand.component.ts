import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  cars:Car[]
  currentCar:Car
  brands:any[];
  currentBrand:Brand;
  dataLoaded=false;

  constructor(private brandService:BrandService,private carService:CarService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  // getBrands(){
  //   this.brandService.getBrands().subscribe(response=>{
  //     this.brands=response.data;
  //     this.dataLoaded=true;
  //   })
  // }
  getBrands(){
    this.carService.getCars().subscribe(response=>{
      this.cars= response.data
      this.dataLoaded=true;
    })
  }
  setCurrentBrand(car:Car){
    this.currentCar=car
  }

  getCurrentBrandClass(car:Car){
    if (car==this.currentCar) {
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

}