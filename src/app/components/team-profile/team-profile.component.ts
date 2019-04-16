import {Component, Input, OnInit} from '@angular/core';
import {Team} from "../../../models/team";

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.scss'],
})
export class TeamProfileComponent implements OnInit {
  @Input() team: Team;

  constructor() { }

  ngOnInit() {}

}

