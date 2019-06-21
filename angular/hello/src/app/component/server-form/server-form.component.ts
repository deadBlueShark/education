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
    this.serverCreated.emit(this.createDevice('server'));
    this.flushFormValue();
  }

  onAddBlueprint(): void {
    this.blueprintCreated.emit(this.createDevice('blueprint'));
    this.flushFormValue();
  }

  private activeSubmitButton(): void {
    setTimeout(() => {
      this.buttonClickable = !this.buttonClickable;
    }, 2000);
  }

  private createDevice(type: string): Server {
    return new Server(type, this.name, this.content);
  }

  private flushFormValue(): void {
    this.name = '';
    this.content = '';
  }
}
