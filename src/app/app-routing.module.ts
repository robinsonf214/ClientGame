import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameListComponent} from './game-list/game-list.component';
import {GameFomrComponent} from './game-fomr/game-fomr.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:'/games',
    pathMatch: 'full'
  },
  {
    path:'games',
    component:GameListComponent
  },
  {
    path:'games/add',
    component: GameFomrComponent
  },
  {
    path:'games/edit/:id',
    component: GameFomrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
