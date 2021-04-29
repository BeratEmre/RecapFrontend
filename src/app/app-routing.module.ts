import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { LoginGuard } from './components/guards/login.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent,canActivate:[LoginGuard]},
  {path:"cars",component:CarComponent,canActivate:[LoginGuard]},
  {path:"cars/brand/:brandId",component:CarComponent,canActivate:[LoginGuard]},
  {path:"cars/color/:colorId",component:CarComponent,canActivate:[LoginGuard]},
  {path:"cars/cardetail/:carId",component:CarDetailComponent ,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
