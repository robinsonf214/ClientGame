import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Game} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  API_URL = 'http://localhost:3000';
  constructor(private http:HttpClient) {} 

  getGames(){
    return this.http.get(`${this.API_URL}/games`);
  }

  getGame(id: string){
    return this.http.get(`${this.API_URL}/games/${id}`);
  }



  deleteGame(id: string) {
    return this.http.delete( `${this.API_URL}/games/${id}` );
  }

  saveGame(game:Game){
    return this.http.post(`${this.API_URL}/games`, game);
  }

  updateGame (id: string|number, updatedGame:Game) {
    return this.http.put(`${this.API_URL}/games/${id}`, updatedGame);

  }
  
}
