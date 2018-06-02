import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, native also available
})
export class ServerElementComponent implements OnInit {
  @Input() element: {
    type: string,
    name: string, content:
    string
  };

  constructor() {
    console.log("constructor called");
   }

  ngOnInit() {
    console.log("ngOnInit called");
  }

}
