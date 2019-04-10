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
  offset: number;
  maxBuffer: number;

  constructor(private apiService: ApiService) {
      this.dataList = [];
      this.maxBuffer = 25;
      this.offset = 0;
      // load 25 in;
  }

  loadData(event) {
      console.log(this.offset);
      setTimeout(() => {
        console.log('Done');
        for(let i = 0; i++ < this.maxBuffer + 1; i++) {
            this.dataList.push(this.players[(i + this.offset - 1)]);
        }
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if(this.dataList.length == this.players.length) {
          event.target.disabled = true;
        } else {
          this.offset += this.maxBuffer;
        }
      }, 500);
  }

  ngOnInit() {
    this.apiService.getPlayers().subscribe((data: any) => {
      // some arbitrary player to test
      this.players = data;
      console.log(data);
      for(let i = 0; i < this.maxBuffer; i++) {
        this.dataList.push(this.players[i]);
      }
      this.offset += this.maxBuffer;
    });

  }

}
