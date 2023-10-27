import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  list=[
    'Get best price for used devise.','Home pick up services,','instant and transparent calculation.','instant cash payment.','No hidden fees.'
  ]
  devices=[
    {img:"../../../../assets/imges/device1.png",p:"CHARGER"},
    {img:"../../../../assets/imges/device2.png",p:"MOBILES"},
    {img:"../../../../assets/imges/device3.png",p:"SELL USED TABLETS"},
    {img:"../../../../assets/imges/device4.png",p:"LAPTOPS"},
    {img:"../../../../assets/imges/device5.png",p:"SMARTWATCHS"},
    {img:"../../../../assets/imges/device6.png",p:"KOPITELEFOC"},
    {img:"../../../../assets/imges/device4.png",p:"LAPTOPS"},
  ]
  slides = [
    {img: "../../../../assets/imges/banner1.png"},
    {img: "../../../../assets/imges/banner1.png"},
    {img: "../../../../assets/imges/banner1.png"},
    {img: "../../../../assets/imges/banner1.png"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll":1,"arrows": true,"navArrow": true,};
  slideConfig1 = {"slidesToShow": 4, "slidesToScroll":3,"arrows": true,"navArrow": true,centerMode: true,
  centerPadding: '200px', responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        
      }
    },
    {
      breakpoint: 1280,
      settings: {
        centerPadding: '100px',
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 991,
      settings: {
        centerPadding: '80px',
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerPadding: '0px',
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 375,
      settings: {
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]};
    
  slickInit(_e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(_e: any) {
    console.log('breakpoint');
  }
  
  afterChange(_e: any) {
    console.log('afterChange');
  }
  
  beforeChange(_e: any) {
    console.log('beforeChange');
  }
}
