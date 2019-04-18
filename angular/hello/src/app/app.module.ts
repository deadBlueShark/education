import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Import module and component, no need to add .ts extension, it's automatically added by Webpack
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServerComponent } from './component/server/server.component';
import { ServersComponent } from './component/servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
