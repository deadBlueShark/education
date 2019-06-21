import { Component, OnInit } from '@angular/core';
import { Server } from '../../model/server';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  servers = [
    { type: 'server', name: 'XBlue', content: 'XBlue server' }
  ];

  constructor() {
    console.log('Servers Constructor');
  }

  ngOnInit(): void {
    console.log('Servers Oninit');
  }

  onServerAdded(server: Server): void {
    this.servers.push(server);
  }

  onBlueprintAdded(blueprint: Server): void {
    this.servers.push(blueprint);
  }
}
