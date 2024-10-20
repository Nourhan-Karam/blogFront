import { Component } from '@angular/core';
import { AuthService } from '../../serves/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private _AuthService:AuthService){}
  allData:any =''
  ngOnInit() {
    this._AuthService.getALLAuthor().subscribe({
      next: (data) => {
        console.log(data);
        this.allData = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
