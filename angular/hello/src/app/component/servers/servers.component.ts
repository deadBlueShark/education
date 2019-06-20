import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  servers = [
    { type: 'server', name: 'XBlue', content: 'XBlue server' }
  ]

  onServerAdded(server): void {
    this.servers.push(server);
  }

  onBlueprintAdded(blueprint): void {
    this.servers.push(blueprint);
  }
}
