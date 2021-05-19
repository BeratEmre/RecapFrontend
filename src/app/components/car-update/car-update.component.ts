import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  id: any
  carUpdateForm : FormGroup;
  car:Car
  constructor(private formBuilder:FormBuilder, 
    private carService:CarService, private toastrService:ToastrService, private route: ActivatedRoute) {
     }
    
    
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('carId');
    console.log(this.id)
    this.createCarUpdateForm();
    this.getCarWithCarId(this.id)
  }

  createCarUpdateForm(){
     this.carUpdateForm = this.formBuilder.group({
       carId:["",Validators.required],
      colorId:["",Validators.required],
      // brandId:["",Validators.required],
      description:["",Validators.required],
      dailyPrice: ["",Validators.required],
      modelYear:["", Validators.required],
      brandName:["",Validators.required],
      colorName:["",Validators.required]
     })
  }
  getCarWithCarId(carId:number){
    this.carService.getCarWithId(carId).subscribe(response=>{
      this.car=response.data
      console.log(response.data);
    })    
  }

  update(){
    if(this.carUpdateForm.valid){
      let carModel = Object.assign({},this.carUpdateForm.value)
      console.log(carModel)
      this.carService.carUpdate(carModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        console.log(responseError)
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }    
        } 
      })      
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }  
  }
}
