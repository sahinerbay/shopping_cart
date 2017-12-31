import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.scss']
})
export class NextButtonComponent {

  @Input() nextRoute: string;
  @Input() content: string;

}