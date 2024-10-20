import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {
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
}
