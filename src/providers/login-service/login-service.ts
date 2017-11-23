import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {user} from '../../pages/login/user';
import { Storage } from '@ionic/storage';
import { tokenNotExpired } from 'angular2-jwt';
/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {
	authToken:any;
	user:any;

  constructor(public http: Http,private storage: Storage) {
   
   

  }

  LogIn(user)
  {
  		var headers=new Headers();
  		headers.append('content-type','application/json');
  		return this.http.post('http://localhost:8000/member/login', user,{headers:headers}).map(res => res.json());

  }

  getMembers(){
  		return this.http.get('http://localhost:8000/member/members')
  		.map(res=>res.json());
  	}

  storeUserData(token,user){

    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem('username',JSON.stringify(user.username));
    this.authToken=token;
    this.user=user;
  }
  LogOut()
  {
   
      this.authToken=null;
      this.user=null;
      localStorage.clear();
      
    
    
  }
     Register(newMmeber)
  {
      var headers=new Headers();
      headers.append('content-type','application/json');
      return this.http.post('http://localhost:8000/member/register',newMmeber,{headers:headers}).map(res => res.json());
  }

  loggedIn() {
   return tokenNotExpired('id_token');
  }
 




}
