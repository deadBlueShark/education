import { Component, Input } from '@angular/core';
import { Server } from '../../model/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  @Input() server: Server;

}
