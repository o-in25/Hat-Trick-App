import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
@Injectable({
    providedIn: 'root',
})
export class DbServiceService {

    private data = null;
    private http = null;

    constructor(private _http: HttpClient) {
        _http.get("http://localhost:3000/api/player-stats/").subscribe((res: Response) => {
            this.data = res;
        });
    }


    public getData() {
        return this.data;
    }
}
