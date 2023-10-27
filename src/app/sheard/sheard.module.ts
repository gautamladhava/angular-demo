import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrialModule } from './matrial/matrial.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FindDevicesComponent } from './find-devices/find-devices.component';
import { ImgContentComponent } from './img-content/img-content.component';
import { BlogTypeComponent } from './blog-type/blog-type.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchComponent, FindDevicesComponent, ImgContentComponent, BlogTypeComponent],
  imports: [CommonModule, MatrialModule,  RouterModule],
  exports: [MatrialModule,HeaderComponent, FooterComponent, SearchComponent,FindDevicesComponent,ImgContentComponent, BlogTypeComponent],
})
export class SheardModule {}
