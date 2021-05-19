import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {

  constructor(private carService:CarService) { }

  dataLoaded:boolean
  cars:Car[]
  ngOnInit(): void {
    this.getCars();
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }
}
