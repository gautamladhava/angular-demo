import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-type',
  templateUrl: './blog-type.component.html',
  styleUrls: ['./blog-type.component.scss']
})
export class BlogTypeComponent {
  categories = [
    'Perspiciatis unde',
    'Omnis',
    'Voluptatem',
    'Accusantium ',
    'Doloremque',
    'Laudantium',
    'Pleasure',
  ];
  popular = [
    'Social Video (2)',
    'Planning and Consolidation (4)',
    'Strategy & Advisory (1)',
    'BI Implementation Services (1)',
    'Big Data and Advanced Analytics (0)',
    'Innovation Labs (5)',
    'Support & Managed Services (2)',
    'Training (10)',
    'Big Data Technologies (1)',
  ];
}
