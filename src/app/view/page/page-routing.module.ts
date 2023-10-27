import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ListingComponent } from './listing/listing.component';
import { ContactComponent } from './contact/contact.component';
import { BusinessComponent } from './business/business.component';
import { EnviromentComponent } from './enviroment/enviroment.component';

const routes: Routes = [
  {path:"",component:PagesComponent,children:[
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"blog",component:BlogComponent},
    {path:"blog-detail",component:BlogDetailComponent},
    {path:"listing",component:ListingComponent},
    {path:"conatact",component:ContactComponent},
    {path:"business",component:BusinessComponent},
    {path:"enviroment",component:EnviromentComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
