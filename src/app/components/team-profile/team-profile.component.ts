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


  isExpanded: boolean = false;
  isExpandedText: string = "View";

  expand(): boolean {
    if(this.isExpanded) {
      this.isExpandedText = "View";
      this.isExpanded = !this.isExpanded;
      return !this.isExpanded;
    } else if(!this.isExpanded) {
      this.isExpandedText = "Hide";
      this.isExpanded = !this.isExpanded;
      return this.isExpanded;
    }
  }
  
  constructor() {   

   }

   overallRating(winPct): number {
     return Math.ceil(((99 * winPct) / 73)) + 10;
   }

  convertWinningPercentage(winPct): number {
    return Math.ceil(winPct * 100);
  }

  


  ngOnInit() {

  }

}

