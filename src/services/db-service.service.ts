import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
@Injectable({
    providedIn: 'root',
})
export class DbServiceService {

    private _data = null;
    private _http = null;

    constructor(private http: HttpClient) {

    }

    public async getData() {
        return await this.http.get("http://localhost:3000/api/player-stats/");
    }
}
