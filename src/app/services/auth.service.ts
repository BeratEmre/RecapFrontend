import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/LoginMoel';
import { SingleResponseModel } from '../models/singleResponseMoel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44383/api/auth/';
  constructor(private httpClient:HttpClient) { }
  login(loginModel:LoginModel):Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
