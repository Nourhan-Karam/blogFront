import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }
  url= 'http://localhost:3000/article/'



  create(article:any){
    return this._HttpClient.post(this.url +'ajout' , article)
  }


  getALLData():Observable<any>{
  return  this._HttpClient.get(`http://localhost:3000/article/all`)
  }

  getArticleById(id:any):Observable<any>{
    return this._HttpClient.get(`http://localhost:3000/article/getById`+id)
  }

}
