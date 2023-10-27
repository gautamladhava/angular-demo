import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  list = [
    'Get best price for used device.',
    'Instant and transparent calculation.',
    'No hidden fees.',
    'Pleasures to secure other greater pleasures.',
    'Endures pains to avoid worse pains.',
  ];
}
