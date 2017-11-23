import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactserviceProvider } from '../../providers/contactservice/contactservice';
import { DashboardPage } from '../dashboard/dashboard';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the AddContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-add-contact',
 	templateUrl: 'add-contact.html',
 })
 export class AddContactPage {
 	first_name:string;
 	last_name:string;
 	phone:string;
 	contacts:any;
 	constructor(public navCtrl: NavController,private toastCtrl: ToastController ,public alertCtrl: AlertController, public navParams: NavParams,private _contactServiceProvider:ContactserviceProvider) {
 	}

 	ionViewDidLoad() {
 		this._contactServiceProvider
 		.getContacts()
 		.subscribe(contacts => this.contacts=contacts);
 	}
 	AddContact()
 	{
 		const newContact={
 			first_name:this.first_name,
 			last_name:this.last_name,
 			phone:this.phone
 		}

 		if( this.first_name == undefined  || this.last_name == undefined || this.phone == undefined){
 				let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Fill All Fields Please  ',
            buttons: ['OK']
          });
          alert.present();
 		}
 		this._contactServiceProvider.addContact(newContact)
 		.subscribe(contact => {



 			if(contact.success){
 				this.contacts.push(contact)
 				this.navCtrl.push(DashboardPage,{
 					contacts: this.contacts,

 				});
 				let toast = this.toastCtrl.create({
 					message: contact.msg,
 					duration: 3000,
 					position: 'top',
 					cssClass:"success"
 				});


 				toast.present();





 			}else{

 				let alert = this.alertCtrl.create({
		            title: 'Error',
		            subTitle: contact.msg,
		            buttons: ['OK']
		          });
		          alert.present();
 			}


 			this.first_name=" ";
 			this.last_name=" ";
 			this.phone=" ";


 		});
 	}
 }
