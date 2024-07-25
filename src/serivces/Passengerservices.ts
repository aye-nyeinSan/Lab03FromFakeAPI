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
    getPassengers(perPage: number,page: number){
        //3 items perPage ondefaults
        return apiClient.get<Passenger[]>(`/passenger?page=${page}&size=${perPage}`)
    },
    getPassengerByID(id:string){
       
        const response = apiClient.get<Passenger>(`/passenger/${id}`);
        console.log("response from Services", response);
        return apiClient.get<Passenger>(`/passenger/${id}`)
    },
   
  
}