import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {

  constructor(private carService:CarService,private toastrService:ToastrService) { }

  dataLoaded:boolean
  cars:Car[]
  selectedRemoveCar:Car
  ngOnInit(): void {
    this.getCars();
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }
  removingCar(car:Car){
    this.selectedRemoveCar=car
  }
  remove(){
    console.log(this.selectedRemoveCar)
    this.carService.carDelete(this.selectedRemoveCar).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
      this.dataLoaded=true;
    },responseError=>{
      console.log(responseError)
      this.toastrService.error("Hata",responseError)
    })
  }
}
