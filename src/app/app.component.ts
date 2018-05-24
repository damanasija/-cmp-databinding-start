import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  
  onServerCreated(serverInfo: {type: string, name: string, content: string}){
    this.serverElements.push(serverInfo);
  }
  onBlueprintCreated(blueprintInfo: {type: string, name: string, content: string}){
    this.serverElements.push(blueprintInfo);
  }

}
