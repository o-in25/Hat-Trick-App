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
    this.apiService.getPlayerWithId(15286).subscribe((data: any) => {
      // some arbitrary player to test
      this.players = data;
    });
  }

}
