import { Component } from '@angular/core';
import { AuthService } from '../../../serves/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public _auth:AuthService , private _Router:Router){}

  logout(){
   localStorage.removeItem('token')
   this._Router.navigate(['/login']);
  }
}
