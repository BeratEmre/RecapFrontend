import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(private carDetailService :CarDetailService, private activatedRoute:ActivatedRoute) { }

  car:CarDetail
  dataLoaded=false

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarByDetail(params["carId"])
      }
    })
  } 

  getCarByDetail(carId:number) {
    this.carDetailService.getCarByDetail(carId).subscribe(response=>{
      this.car=response.data;
      this.dataLoaded=true
    })    
  }
}
