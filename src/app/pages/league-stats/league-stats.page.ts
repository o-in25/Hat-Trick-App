import { Component, OnInit } from '@angular/core';
import {Player} from "../../../models/player";
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-league-stats',
  templateUrl: './league-stats.page.html',
  styleUrls: ['./league-stats.page.scss'],
})
export class LeagueStatsPage implements OnInit {
  ptsPerGameLeaders: Player[];
  plusMinusPerGameLeaders: Player[];
  blocksPerGameLeaders: Player[];
  astsPerGameLeaders: Player[];

  // titles
  ppgTitle = "Points Per Game";
  apgTitle = "Assists Per Game";
  pmpgTitle = "+/- Per Game";
  bpgTitle = "Blocks Per Game";

  serverError: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPointsPerGameLeaders().subscribe((data: any) => {
      // some arbitrary player to test
      this.ptsPerGameLeaders = data.slice(0, 10);
    }, (error) => {
      this.serverError = error.message;
    });
    // assists
    this.apiService.getAssistsPerGameLeaders().subscribe((data: any) => {
      // some arbitrary player to test
      this.astsPerGameLeaders = data.slice(0, 10);
    }, (error) => {
      this.serverError = error.message;
    });
    // plus minus
    this.apiService.getPlusMinusPerGameLeaders().subscribe((data: any) => {
      // some arbitrary player to test
      this.plusMinusPerGameLeaders = data.slice(0, 10);
    }, (error) => {
      this.serverError = error.message;
    });
    // blocks
    this.apiService.getBlocksPerGamePerGameLeaders().subscribe((data: any) => {
      // some arbitrary player to test
      this.blocksPerGameLeaders = data.slice(0, 10);
    }, (error) => {
      this.serverError = error.message;
    });

  }

}
