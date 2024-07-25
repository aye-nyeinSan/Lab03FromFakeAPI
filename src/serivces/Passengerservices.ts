import axios, { AxiosResponse } from 'axios';
import {type Passenger} from '../types/Passenger';

const apiClient = axios.create({
  baseURL: "https://api.instantwebtools.net/v1",
  withCredentials: false,
  headers:{
    Accept: ' application/json',
    'Content-Type': 'application/json'
  }
});

export default {
    getPassengers(perPage:Number,page:Number){
        return apiClient.get<Passenger[]>(`/passenger?page=${perPage}&size=${page}`)
    },
    getPassenger(id:String){
        return apiClient.get<Passenger>(`/passenger/${id}`)
    },
    getNewPassengers(){
        return apiClient.get("/passenger?page=0&size=10");
    }
  
}