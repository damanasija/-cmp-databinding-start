import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter <{type: string, name: string, content: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{type: string, name: string, content: string}>();
  //bpCreated is alias for other components who want to listen to this emitted event. they just need to bind to this alias name
  
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      type: 'blueprint',      
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
