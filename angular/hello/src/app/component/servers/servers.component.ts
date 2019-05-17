import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  servers = [];
  buttonClickable = false;
  serverName = '';
  serverAliasName = '';
  status = true;

  constructor() {
    setTimeout(() => {
      this.buttonClickable = !this.buttonClickable;
    }, 2000);
  }

  createdServer(): void {
    if (!(this.serverName.trim() && this.serverAliasName.trim())) {
      return;
    }
    this.servers.push({ name: this.serverName, alias: this.serverAliasName, status: this.genStatus() });
  }

  // Receive data from view (one-way binding). Can use two-way binding to remove this
  typeServerName(event: Event): void {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  genStatus() {
    return Math.random() > 0.5;
  }

  colorOnStatus(status: boolean): string {
    return status ? 'green' : 'red';
  }
}
