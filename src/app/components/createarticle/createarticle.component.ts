import { Component } from '@angular/core';
import { AuthService } from '../../serves/auth.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrl: './createarticle.component.css'
})
export class CreatearticleComponent {
  constructor(private _AuthService:AuthService ,private _DataService:DataService , private _Router:Router){}
  article:any={
    title:'',
    content:'',
    tags:[],
    description:''
  }
  tag:any=''
  image:any
  select(e: any){
    this.image = e.target.files[0] ;
  }

  create(){
    let fd = new FormData()
    fd.append('title', this.article.title)
      fd.append('content', this.article.content)
      fd.append('tags', this.article.tags.toString())
      fd.append('description', this.article.description)
      fd.append('image', this.image)
      // fd.append('idAuthor', this._AuthService.getAuthorDataFromToken()._id)
      this._DataService.create(fd).subscribe(res=> {
        this._Router.navigate(['/home'])
      })

  }
}
