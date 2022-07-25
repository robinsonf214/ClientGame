import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from '../models/game';
import{GameService} from '../services/game.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game-fomr',
  templateUrl: './game-fomr.component.html',
  styleUrls: ['./game-fomr.component.css']
})
export class GameFomrComponent implements OnInit {
  @HostBinding ('class') classes = 'row';

  game:Game={
    id:0,
    title:'',
    description:'',
    image:'',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private gameService: GameService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['id']){
      this.gameService.getGame(params['id']).subscribe(
        res =>{
          this.game = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewGame(){
    //se elimina el create_at y el Id ya que la base de satos sql
    // los genera automaticamente 
    //delete this.game.created_at;
    //delete this.game.id;
    this.gameService.saveGame(this.game)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/games']);
        
      },
      err => console.error(err)
    
    )
  }

  updateGame(){
    let gameid:number = this.game.id!; 
    this.gameService.updateGame(gameid, this.game).subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    )
  }
}
