import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/view/auth/login/login.component';
import { SignInComponent } from 'src/app/view/auth/sign-in/sign-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  colorControl = new FormControl('one' as ThemePalette);
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LoginComponent, {     
    });
  }
  openDialogs() {
    this.dialog.open(SignInComponent, {     
    });
  }
  toggle_menu(){
    document.body.classList.toggle('open-menu') 
  }
}
