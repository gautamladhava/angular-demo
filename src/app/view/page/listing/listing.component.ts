import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {
table=[
  {img:"../../../../assets/imges/iphone7.png",name:"Apple iPhone 7"},
  {img:"../../../../assets/imges/iphone7plus.png",name:"Apple iPhone 7 Plus"},
  {img:"../../../../assets/imges/iphone6s.png",name:"Apple iPhone 6s"},
  {img:"../../../../assets/imges/iphone6splus.png",name:"Apple iPhone 6s Plus"},
  {img:"../../../../assets/imges/iphonese.png",name:"Apple iPhone SE"},
  {img:"../../../../assets/imges/iphone6.png",name:"Apple iPhone 6 "},
  {img:"../../../../assets/imges/iphone6plus.png",name:"Apple iPhone 6 Plus"},
  {img:"../../../../assets/imges/iphone5plus.png",name:"Apple iPhone 5s"},
]
}
