import { Component } from '@angular/core';
import { AuthService } from '../../serves/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}
  author={
    email:'',
    password:''
  }

token:any

  login(){
    this._AuthService.login(this.author).subscribe(res=>{

      this.token = res
      localStorage.setItem('token', this.token.myToken)

      this._Router.navigate(['/home'])
    }, err=>{
      console.log(err);
    });

  }
}
