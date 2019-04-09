import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {Player} from "../../../models/player";

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.page.html',
  styleUrls: ['./player-stats.page.scss'],
})
export class PlayerStatsPage implements OnInit {
  players: Player[] = undefined;
  dataList: Player[] = undefined;
  index: number = 0;

  constructor(private apiService: ApiService) {
      this.dataList = [];
      // load 25 in;
  }

  loadData(event) {
      setTimeout(() => {
        console.log('Done');
        for(let i = 0; i++ < 25; i++) {
            this.dataList.push(this.players[i]);
        }
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if(this.dataList.length == 1000) {
          event.target.disabled = true;
        }
      }, 500);
  }

  ngOnInit() {
    this.apiService.getPlayers().subscribe((data: any) => {
      // some arbitrary player to test
      this.players = data;
      for(let i = 0; i < 25; i++) {
        this.dataList.push(this.players[i]);
      }
    });

  }

}
