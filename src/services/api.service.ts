import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = "http://localhost:3000/api/player-stats/";


  constructor(private httpClient: HttpClient) { }

  public getPlayers() {
    return this.httpClient.get<Object[]>(this.baseUrl);

  }

}
