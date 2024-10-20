import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../serves/auth.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit  {
  constructor( private act:ActivatedRoute ,private _AuthService:AuthService , private _ActivatedRoute:ActivatedRoute ){}
  // id:any
  // author: any;
  article:any
  ngOnInit() {

  // this.id = this.act.snapshot.paramMap.get('id');
  // this._AuthService.getById(this.id).subscribe(res=>{
  //   this.author = res;
  //   console.log(this.author);


  // })
  this._ActivatedRoute.params.subscribe(params => {
    const id = params['id'];
    console.log(id);

    this._AuthService.getById(id).subscribe(data=>{
      console.log(data);
      this.article = data;

    })

  })

}}
