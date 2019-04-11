import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {Player} from "../../../models/player";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  players: Player[] = undefined;

  constructor(private apiService: ApiService) { }

  search($event) {
    let term = $event.target.value;
    if(term.length > 0) {
      this.apiService.wildcard(term).subscribe((data: any) => {
        this.players = data;
        console.log(data);
      })
    } else {
      this.players = [];
    }
  }


  ngOnInit() {

  }

}
