import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
})
export class ProgressCircleComponent implements OnInit {
  @Input() circumference: number;


  private progress(value: number) {
  }

  constructor() {
  }



  ngOnInit() {}

}
