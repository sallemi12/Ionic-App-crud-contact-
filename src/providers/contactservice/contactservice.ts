import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContactserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ContactserviceProvider {

  constructor(public http: Http) {
    console.log('Hello ContactserviceProvider Provider');
  }
 getContacts()
  {
  	return this.http.get('http://localhost:8000/contact/contacts')
  	.map(res=>res.json());
  }
   deleteContact(id)
  {
  		return	this.http.delete('http://localhost:8000/contact/contact/'+id).
  		map( res=> res.json());
  }
    addContact(newContact)
  {
      var headers=new Headers();
      headers.append('content-type','application/json');
      return this.http.post('http://localhost:8000/contact/contact',newContact,{headers:headers}).map(res => res.json());
  }
  UpdateContact(newContact)
  {
     var headers=new Headers();
      headers.append('content-type','application/json');
      return this.http.post('http://localhost:8000/contact/Updatecontact/'+newContact._id,newContact,{headers:headers}).map(res => res.json());
  }
}
