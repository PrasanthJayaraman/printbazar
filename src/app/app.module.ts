import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routesModule } from './app.routes';

import { AppComponent } from './app.component';
import { PokemonService } from './services/pokemon.service';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    routesModule,
    HttpClientModule,
    BrowserTransferStateModule    
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
