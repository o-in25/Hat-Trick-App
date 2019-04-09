import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {trigger, state, style, animate, transition} from "@angular/animations";
@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
  animations: [
    trigger('elementState', [
      state('opaque', style({
        opacity: 1
      })),
      state('transparent', style({
        opacity: 0
      })),
      transition('opaque => transparent', animate('4000ms ease-in')),
      transition('transparent => opaque', animate('4000ms ease-out'))
    ])
  ]
})
export class ProgressCircleComponent implements OnInit {
  @Input() circumference: number;


  private progress(value: number) {
  }

  constructor() {
  }



  ngOnInit() {}

}
