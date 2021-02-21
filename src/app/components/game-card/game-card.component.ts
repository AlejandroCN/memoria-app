import { Component, OnInit } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons/faSyncAlt';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  public faSyncAlt = faSyncAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
