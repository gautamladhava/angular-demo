import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  colorControl = new FormControl('one' as ThemePalette);
  table = [
    {
      img: '../../../../assets/imges/blog1.png',
      heading: 'Lorem Ipsum is simply dummy text of the printing.',
      listitem1: 'June 09,2015',
      listitem2: '10 Like',
      listitem3: '2 Comment',
      p: "It is a long established fact that a reader will be distracted by the readablecontent of a    page when looking at its layout. The point of using Lorem Ipsum is that it has a    more-or-less normal distribution of letters, as opposed to using 'Content here, content    here', making it look like readable English. Many desktop publishing packages and web page    editors now sometimes by accident, sometimes on purpose...",
    },
    {
      img: '../../../../assets/imges/blog2.png',
      heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      listitem1: 'July 15,2016',
      listitem2: '10 Like',
      listitem3: '2 Comment',
      p: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex eaommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum... ',
    },
    {
      img: '../../../../assets/imges/blog3.png',
      heading:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      listitem1: 'November 23,2016',
      listitem2: '10 Like',
      listitem3: '2 Comment',
      p: ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi magnam...',
    },
    {
      img: '../../../../assets/imges/blog4.png',
      heading: 'On the other hand, we denounce with righteous indignation.',
      listitem1: 'January 08,2017',
      listitem2: '10 Like',
      listitem3: '2 Comment',
      p: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is  that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now sometimes by accident, sometimes on purpose...",
    },
  ];

}
