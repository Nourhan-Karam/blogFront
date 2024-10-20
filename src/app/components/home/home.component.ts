import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private _DataService:DataService , private _Router:Router){}
dataAll:any=''
  ngOnInit() {
  this._DataService.getALLData().subscribe({
    next: (data) => {
      console.log(data);
      this.dataAll = data;
    },
    error: (err) => {
      console.error(err);
    }
  })
  }


  seAuthor(id:any){
    console.log(id)

    this._Router.navigate(['/author', id])
  }
}
