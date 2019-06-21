import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
    console.log('App component constructor');
  }

  ngOnInit(): void {
    console.log('App Component Oninit');
  }
}
