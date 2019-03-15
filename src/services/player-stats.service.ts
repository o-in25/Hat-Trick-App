import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class PlayerStatsService {

    constructor(private http: HttpClient) {

    }

    public getAllPlayers() {
        this.http.get("");
    }


}