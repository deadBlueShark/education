import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Import module and component, no need to add .ts extension, it's automatically added by Webpack
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServerComponent } from './component/server/server.component';
import { ServersComponent } from './component/servers/servers.component';
import { ServerFormComponent } from './component/server-form/server-form.component';
import { StudentsComponent } from './component/students/students.component';
import { StudentComponent } from './component/student/student.component';
import { StudentFormComponent } from './component/student-form/student-form.component';
import { AnimalComponent } from './component/animal/animal.component';
import { AnimalFormComponent } from './component/animal-form/animal-form.component';
import { AnimalsComponent } from './component/animals/animals.component';
import { HeroComponent } from './component/hero/hero.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroFormComponent } from './component/hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ServerFormComponent,
    StudentsComponent,
    StudentComponent,
    StudentFormComponent,
    AnimalComponent,
    AnimalFormComponent,
    AnimalsComponent,
    HeroComponent,
    HeroesComponent,
    HeroFormComponent
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
