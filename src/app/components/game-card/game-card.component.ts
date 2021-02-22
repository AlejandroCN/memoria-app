import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons/faSyncAlt';
import { GameCard } from 'src/app/models/game-card.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input() public gameCard: GameCard;
  @Output() public clickCard: EventEmitter<GameCard>;

  public faSyncAlt = faSyncAlt;

  constructor() {
    this.clickCard = new EventEmitter();
  }

  ngOnInit(): void {}

  public selectCard(): void {
    if (!this.gameCard.success && !this.gameCard.shown && !this.gameCard.error) {
      this.gameCard.shown = !this.gameCard.shown;
      this.clickCard.emit(this.gameCard);
    }
  }
}
