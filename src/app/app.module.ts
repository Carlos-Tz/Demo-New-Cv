import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2ImgMaxModule } from 'ng2-img-max';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewElementComponent } from './components/new-element/new-element.component';
import { PanelComponent } from './components/panel/panel.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NewElementComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2ImgMaxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
