import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }

  private url = 'http://localhost:3000/author/';

  register(author: any): Observable<any> {
    return this._HttpClient.post(this.url + 'register', author);
  }

  login(author:any):Observable<any>{
    return this._HttpClient.post( 'http://localhost:3000/author//login', author)
  }


  isLoggedIn(){
    let token = localStorage.getItem('token');
    if(token){
      return true;
    }else{
      return false;
    }
  }


  getAuthorDataFromToken(){
    let token =localStorage.getItem('token');
    if(token){
      let data = JSON.parse(window.atob(token.split(' . ')[1]));
      return data;
    }
  }

  getById(id: any){
    return this._HttpClient.get('http://localhost:3000/article/getById/'+id)
  }


  getALLAuthor(){
    return this._HttpClient.get('http://localhost:3000/author/all')
  }

}
