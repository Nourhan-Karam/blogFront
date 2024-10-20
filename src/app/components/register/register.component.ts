import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../serves/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
  })
  export class RegisterComponent  {
    author={
      name:'',
      lastName:'',
      email:'',
      password:'',
      about:''
    }

    image:any;
    select(e:any){
      this.image = e.target.files[0] as File;
    }
    constructor( private _AuthService:AuthService , private _Router:Router){}
    register(){
      let fd = new FormData()
      fd.append('name', this.author.name)
      fd.append('lastName', this.author.lastName)
      fd.append('email', this.author.email)
      fd.append('password', this.author.password)
      fd.append('about', this.author.about)
      fd.append('image', this.image)


      this._AuthService.register(fd).subscribe(res=>{

          this._Router.navigate(['/login'])


      })
    }







      // registerForm: FormGroup = new FormGroup({
    //   name: new FormControl('' ),
    //   lastName: new FormControl( ''),
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    //   about: new FormControl(''),

    // })
    // handlform(){
    //   this._AuthService.register(this.registerForm.value).subscribe({
    //     next: (data) => {
    //        console.log(this.registerForm.value)
    //   this._Router.navigate(['/login'])
    //       console.log(data);
    //     },
    //     error: (error) => {
    //       console.error(error);
    //     }
    //   })

      // this.handleregister()







    }



