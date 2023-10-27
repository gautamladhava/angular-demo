import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  list = [
    'ABOUT',
    'HOW IT WORKS',
    'ENVIROMENT',
    'BUSINESS',
    'blog',
    'FAQ',
    'CONTACT',
  ];
  data = [
    {
      name: 'Facebook',
      img: '../../../assets/imges/facebook.png',
    },
    {
      name: 'Twitter',
      img: '../../../assets/imges/twitter.png',
    },
    {
      name: 'Youtube',
      img: '../../../assets/imges/youtube.png',
    },
    
  ];
}
