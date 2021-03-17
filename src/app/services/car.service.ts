import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44383/api/';

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);     
  }

  getCarsByBrands(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getbycarswithbrand/?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);     
  }

  getCarsByColors(colorId:number):Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getbycarswithcolor/?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);     
  }

  getCarByDetail(carId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath=this.apiUrl+"cars/cardetail/?carid="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);     
  }
}