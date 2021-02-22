import { Component, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="spinner-container text-primary">
      <fa-icon [icon]="faSpinner" [spin]="true" size="5x"></fa-icon>
    </div>
  `,
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  public faSpinner = faSpinner;

  constructor() {}

  ngOnInit(): void {}
}
