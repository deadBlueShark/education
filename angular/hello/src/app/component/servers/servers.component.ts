import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  buttonClickable: boolean = false;
  serverCreated: string = 'No server';
  serverName: string = '';
  serverAliasName: string = '';

  constructor() {
    setTimeout(() => {
      this.buttonClickable = !this.buttonClickable;
    }, 2000);
  }

  createdServer(): void {
    this.serverCreated = `[Server created] Name: ${this.serverName}. Alias: ${this.serverAliasName}`;
  }

  typeServerName(event: Event): void {
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
