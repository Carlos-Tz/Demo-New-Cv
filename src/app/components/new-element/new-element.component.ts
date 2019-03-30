import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-element',
  templateUrl: './new-element.component.html',
  styleUrls: ['./new-element.component.css']
})
export class NewElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  change($event){
    console.log($event.target.value);
  }
}
