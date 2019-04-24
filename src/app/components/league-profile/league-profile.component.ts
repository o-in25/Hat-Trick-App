import {Component, Input, OnInit} from '@angular/core';
import {Team} from "../../../models/team";
import {Player} from "../../../models/player";

@Component({
  selector: 'app-league-profile',
  templateUrl: './league-profile.component.html',
  styleUrls: ['./league-profile.component.scss'],
})
export class LeagueProfileComponent implements OnInit {
  @Input() object: Player[];

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
