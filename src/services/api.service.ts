import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../models/player";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = "http://localhost:3000/api/player-stats/";


  constructor(private httpClient: HttpClient) { }

  public getPlayers() {
    return this.httpClient.get<Object[]>(this.baseUrl);
  }

  public getPlayerWithIdTest(id: Number): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.baseUrl + "player/" + id);
  }


  public getAllPlayers(): Observable<Object[]> {
    return this.httpClient.get<Object[]>(this.baseUrl);
  }

  public getPlayerWithId(id: Number): Observable<Object[]> {
    return this.httpClient.get<Player[]>(this.baseUrl + "player/" + id);
  }

  public getPlayerWithPointsPerGameGreatherThan(points: Number): Observable<Object[]> {
    return this.httpClient.get<Object[]>(this.baseUrl + "/player/points/" + points);
  }


}
