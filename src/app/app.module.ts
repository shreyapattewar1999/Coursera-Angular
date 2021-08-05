import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { DishdetailsComponent } from './dishdetails/dishdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule, 
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
