import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {trigger, state, style, animate, transition} from "@angular/animations";
@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
})
export class ProgressCircleComponent implements OnInit {
  @Input() circumference: number;
  style: string;


  private progress() {
    if(this.circumference >= 90) {
      this.style = "green";
    } else if(this.circumference >= 80) {
      this.style = "yellow";
    } else if(this.circumference >= 70) {
      this.style = "orange";
    } else if(this.circumference < 70) {
      this.style = "red";
    }


    return this.style;
  }


  constructor() {

  }



  ngOnInit() {}

}
