import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  private highscore: Array<{money:number, time:number}>;


  constructor() {

  }
}
