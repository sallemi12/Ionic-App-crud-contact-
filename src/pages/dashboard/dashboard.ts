import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactserviceProvider } from '../../providers/contactservice/contactservice';
import { AddContactPage } from '../add-contact/add-contact';
import { UpdateContactPage } from '../update-contact/update-contact';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import  {LoginPage} from '../login/login';
import  {HomePage} from '../home/home';
import  { MyApp } from '../../app/app.component';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @IonicPage()

 @Component({
 	selector: 'page-dashboard',
 	templateUrl: 'dashboard.html',
 })
 export class DashboardPage {
 	contacts:any;

 	constructor(public navCtrl: NavController,private toastCtrl: ToastController ,public alertCtrl: AlertController,public navParams: NavParams,private _LoginServiceProvider:LoginServiceProvider,private _contactServiceProvider:ContactserviceProvider) {
 		this.contacts=navParams.get("contacts");
     
 	}
   ionViewCanEnter(): boolean {
    if(this._LoginServiceProvider.loggedIn()){
      return true;
    } else {
      return false;
    }
  }

 	ionViewDidLoad() {
 		this._contactServiceProvider
 		.getContacts()
 		.subscribe(contacts => this.contacts=contacts);
 	}
 	delete(id:any){
     let alert = this.alertCtrl.create({
    title: 'Confirm purchase',
    message: 'Do you want delete this contact?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Delete',
        handler: () => {
            var contacts=this.contacts;
     this._contactServiceProvider.deleteContact(id)
     .subscribe(data => {

       for (var i=0 ;i < contacts.length ;i++){
         if(contacts[i]._id == id){

           this.contacts.splice(i,1);  
         }
       };
        this._contactServiceProvider.getContacts()
        .subscribe(contacts => this.contacts=contacts);
      })
        }
      }
    ]
  });
  alert.present();
 	

  }
  loadAddPage(){
  	this.navCtrl.push(AddContactPage);
  
  }
  loadUpdatePage(contact:any){
  	this.navCtrl.push(UpdateContactPage,{id:contact._id,first_name:contact.first_name,last_name:contact.last_name,phone:contact.phone});
  	console.log(contact.first_name);
  
  }
  logout(){
     let toast = this.toastCtrl.create({
    message: 'You are Logged Out !',
    duration: 3000,
    position: 'top',
    cssClass:"logout-toast"
  });

  toast.onDidDismiss(() => {
     this._LoginServiceProvider.LogOut()
    this.navCtrl.push(HomePage);
  });

  toast.present();
   
  }

}
