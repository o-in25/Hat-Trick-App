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
  stats: Object;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPlayerWithIdTest(10102).subscribe((data: any) => {
      this.players = data;
    })
  }

}
