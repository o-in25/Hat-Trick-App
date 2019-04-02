import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss'],
})
export class PlayerProfileComponent implements OnInit {
  @Input() player: Player;

  constructor() { }

  ngOnInit() {

  }

}
