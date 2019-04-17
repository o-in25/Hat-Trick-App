import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roster-player',
  templateUrl: './roster-player.component.html',
  styleUrls: ['./roster-player.component.scss'],
})
export class RosterPlayerComponent implements OnInit {
  dataList = null;

  constructor() { }

  ngOnInit() {
  }

}
