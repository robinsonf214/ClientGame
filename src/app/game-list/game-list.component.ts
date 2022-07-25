import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Game } from '../models/game';
import{GameService} from '../services/game.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  games: any= [];
  constructor(private gameService:GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.gameService.getGames().subscribe(
      res=> {
        this.games = res;
      },
      err => console.error(err)
    );
  }


  deleteGame(id: string){
    this.gameService.deleteGame(id).subscribe(
      res=>{
        console.log(res);
        this.getGames();
      },
      err => console.log(err)
    )
  }

}
