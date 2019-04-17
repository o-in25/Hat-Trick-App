import {Component, Input, OnInit, ChangeDetectorRef} from '@angular/core';
import {Team} from "../../../models/team";

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.scss'],
})
export class TeamProfileComponent implements OnInit {
  @Input() team: Team;
  // the number for the alternate
  switch: number;
  set: boolean;
  private _changeDetectionRef : ChangeDetectorRef

  constructor() {   

   }

  convertWinningPercentage(winPct): number {
    return Math.ceil(winPct * 100);
  }

  alternate(): boolean {
    this.set = ((this.switch % 2) == 0);
    return this.set;
  }


  ngOnInit() {
    this.switch = 0;
    this.set = true;
  }

}

