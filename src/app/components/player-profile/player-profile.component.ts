import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss'],
})
export class PlayerProfileComponent implements OnInit {
  @Input() player: Player;

  isExpanded: boolean = false;

  expand(): boolean {
    if(this.isExpanded) {
      this.isExpanded = !this.isExpanded;
      return !this.isExpanded;
    } else if(!this.isExpanded) {
      this.isExpanded = !this.isExpanded;
      return this.isExpanded;
    }
  }
  constructor() { }

  toggleInfiniteScroll() {

  }

  ngOnInit() {

  }

}
