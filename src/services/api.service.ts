import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../models/player";
import {Team} from "../models/team";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = "http://localhost:3000/api/player-stats/";
  serviceWorkerUrl: string = "http://localhost:3000/api/service-worker/";
  teamStatsUrl: string = "http://localhost:3000/api/team-stats/";

  constructor(private httpClient: HttpClient) { }

  public getPlayers() {
    return this.httpClient.get<Object[]>(this.baseUrl);
  }

  public getPlayerWithIdTest(id: number): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.baseUrl + "player/" + id);
  }

  public getAllPlayers(): Observable<Object[]> {
    return this.httpClient.get<Object[]>(this.baseUrl);
  }

  public getPlayerWithId(id: number): Observable<Object[]> {
    return this.httpClient.get<Player[]>(this.baseUrl + "player/" + id);
  }

  public getPlayerWithPointsPerGameGreatherThan(points: Number): Observable<Object[]> {
    return this.httpClient.get<Object[]>(this.baseUrl + "/player/points/" + points);
  }

  // search for a player
  public wildcard(search: string): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.serviceWorkerUrl + "search/" + search);
  }

  public getTeamRosters(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.teamStatsUrl + "team/roster")
  }

}

