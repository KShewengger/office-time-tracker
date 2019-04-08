import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://localhost:3000' }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
