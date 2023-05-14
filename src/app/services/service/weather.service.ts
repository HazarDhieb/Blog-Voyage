import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/app/env';
import {Observable} from 'rxjs';
//typer la requete
export interface Location{
  address:string;
  currentConditions: {
    temp:number;
  }}
@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  //on declare l'URL et le Token
  urlApi=env.weatherApi.url;
  tokenApi=env.weatherApi.Token;

  constructor(private httpClient:HttpClient) { }
  getLocation(): Observable<Location>{
    //on decoupe l'url selon ce qui nous intresses
    const url=`${this.urlApi}/miami?unitGroup=metric&key=${this.tokenApi}&contentType=json`;
    return this.httpClient.get<Location>(url);
  }
}
