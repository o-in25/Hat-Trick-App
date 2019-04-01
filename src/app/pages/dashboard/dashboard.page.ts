import { Component, OnInit } from '@angular/core';
import {DbServiceService} from "../../../services/db-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [DbServiceService]
})
export class DashboardPage implements OnInit {

  private data = null;
  playerStatsService: DbServiceService = null;

  constructor(playerStatsService: DbServiceService) {
    this.playerStatsService = playerStatsService;
  }

  ngOnInit() {
    this.data = this.playerStatsService.getData();
    console.log(this.data);
  }

}
