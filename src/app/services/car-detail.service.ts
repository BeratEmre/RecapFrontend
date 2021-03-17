import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {


  apiUrl = 'https://localhost:44383/api/';

  constructor(private httpClient: HttpClient) { }

  getCarByDetail(carId:number):Observable<CarDetailResponseModel> {
    let newPath=this.apiUrl+"cars/cardetail/?carid="+carId
    return this.httpClient.get<CarDetailResponseModel>(newPath);     
  }
}
