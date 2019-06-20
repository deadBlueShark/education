import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { Server } from '../../model/server';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.scss']
})
export class ServerFormComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Server>();
  @Output() blueprintCreated = new EventEmitter<Server>();

  buttonClickable = false;
  name: string;
  content: string;

  ngOnInit() {
    this.activeSubmitButton()
  }

  onAddServer(): void {
    this.serverCreated.emit(new Server('server', this.name, this.content));
  }

  onAddBlueprint(): void {
    this.blueprintCreated.emit(new Server('blueprint', this.name, this.content));
  }

  private activeSubmitButton(): void {
    setTimeout(() => {
      this.buttonClickable = !this.buttonClickable
    }, 2000);
  }
}
