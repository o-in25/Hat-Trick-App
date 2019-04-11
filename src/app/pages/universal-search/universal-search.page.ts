import { Component, OnInit } from '@angular/core';
import {Player} from "../../../models/player";
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-universal-search',
  templateUrl: './universal-search.page.html',
  styleUrls: ['./universal-search.page.scss'],
})
export class UniversalSearchPage implements OnInit {

  players: Player[] = undefined;

  constructor(private apiService: ApiService) { }



  ngOnInit() {

  }

}
