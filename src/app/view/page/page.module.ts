import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PagesComponent } from './pages.component';
import { SheardModule } from 'src/app/sheard/sheard.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ListingComponent } from './listing/listing.component';
import { ContactComponent } from './contact/contact.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    BlogDetailComponent,
    ListingComponent,
    ContactComponent,

  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SheardModule,
    SlickCarouselModule,
    RouterModule 
  
  ]
})
export class PageModule { }
