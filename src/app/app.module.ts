import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ServvehiculoService } from './servicio/servvehiculo.service';

import { FormsModule } from '@angular/forms';
import { AutoComponent } from './components/auto/auto.component';
import { DetallevehiculoComponent } from './components/detallevehiculo/detallevehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AutoComponent,
    DetallevehiculoComponent,
    BuscadorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ServvehiculoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
