import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter <{type: string, name: string, content: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{type: string, name: string, content: string}>();
  //bpCreated is alias for other components who want to listen to this emitted event. they just need to bind to this alias name
  
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement) {
    // console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({
      type: 'server',
      name: serverName.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      type: 'blueprint',
      name: serverName.value,
      content: this.serverContentInput.nativeElement.value
    });
  }
}
