import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactserviceProvider } from '../../providers/contactservice/contactservice';
import { DashboardPage } from '../dashboard/dashboard';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the UpdateContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-update-contact',
 	templateUrl: 'update-contact.html',
 })
 export class UpdateContactPage {
 	contacts:any;
 	first_name:string;
 	last_name:string;
 	phone:string;
 	id:any;
 	constructor(public navCtrl: NavController,private toastCtrl: ToastController ,public alertCtrl: AlertController, public navParams: NavParams,private _contactServiceProvider:ContactserviceProvider) {
 		this.id=navParams.get("id");
 		this.first_name=navParams.get("first_name");
 		this.last_name=navParams.get("last_name");
 		this.phone=navParams.get("phone");

 	}

 	ionViewDidLoad() {
 		this._contactServiceProvider
 		.getContacts()
 		.subscribe(contacts => this.contacts=contacts);

 	}
 	UpdateContact(){
 		
 		   
      
    const newContact={
      _id:this.id,
      first_name:this.first_name,
      last_name:this.last_name,
      phone:this.phone
    }

    
    this._contactServiceProvider.UpdateContact(newContact)
    .subscribe(contact => {
      if(contact.success){
       let toast = this.toastCtrl.create({
           message: contact.msg,
           duration: 3000,
           position: 'top',
           cssClass:"success"
         });


         toast.present();
      this.navCtrl.push(DashboardPage,{
          contacts: this.contacts,
        });
          
      }
      else{
        let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: contact.msg,
            buttons: ['OK']
          });
          alert.present();
      }
    	
  
   
             

        
  });

 	}


 }
