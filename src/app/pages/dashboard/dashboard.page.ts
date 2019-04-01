import { Component, OnInit } from '@angular/core';
import {DbServiceService} from "../../../services/db-service.service";
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})

export class DashboardPage implements OnInit {

  private data = null;
  readonly _dbService = null;

  constructor(private apiService: ApiService) { }

  imageSrc = "../../assets/dashboard/curry.jpg";

  ngOnInit() {
    this.apiService.getPlayers().subscribe((res) => {
      console.log(res);
      // some arbitrary player
      this.data = res[12];
    });
  }

}
