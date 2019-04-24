import { Component, OnInit } from '@angular/core';
import { Team } from "../../../models/team";
import {ApiService} from "../../../services/api.service";
import {Player} from "../../../models/player";

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.page.html',
  styleUrls: ['./team-stats.page.scss'],
})
export class TeamStatsPage implements OnInit {

  teams: Team[];
  serverError: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log('Working...');
    this.apiService.getTeamRosters().subscribe((data: any) => {
      // some arbitrary player to test
      this.teams = data;
      console.log(data);
      console.log(this.teams);
    }, (error) => {
      this.serverError = error.message;
    });
  }

}
