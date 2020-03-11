import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationModule } from './modules/navigation/navigation.module';
import { ItemsComponent } from './modules/items/items.component';
import { ItemComponent } from './modules/item/item.component';
import { ItemsModule } from './modules/items/items.module';
import { ItemModule } from './modules/item/item.module';
import { HttpClientModule } from '@angular/common/http';
import { FotoModule } from './modules/foto/foto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [    
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    NavigationModule,
    ItemsModule,
    ItemModule,
    FotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
