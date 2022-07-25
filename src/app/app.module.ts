import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GameFomrComponent } from './game-fomr/game-fomr.component';
import { GameListComponent } from './game-list/game-list.component';
import {GameService} from './services/game.service'
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFomrComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
