import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor() { }

  search($event) {
    let char = $event.target.value;
    if(char.length % 3 == 0) {
      console.log('searching again');
    }
  }

  ngOnInit() {

  }

}
