import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Paises} from "../model/Paises";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private catalogCountries = 'https://restcountries.com/v3.1/all';
  


  constructor(private httpClient: HttpClient) { }

  getPaises():Observable<Paises[]>{
    return this.httpClient.get<Paises[]>(this.catalogCountries);
  }


  




}
