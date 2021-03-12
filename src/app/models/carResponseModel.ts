import { Car } from "./car";
import { Rental } from "./rental";
import { ResponseModel } from "./responseModel";

export interface CarResponseModel extends ResponseModel{
    data:Car[]
}