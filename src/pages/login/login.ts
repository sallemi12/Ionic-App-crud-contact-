import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { user } from '../../pages/login/user';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DashboardPage } from '../dashboard/dashboard';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	email:string;
	password:string;
	username:string;
	members:user[];
	
  constructor(private storage: Storage,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private _LoginServiceProvider:LoginServiceProvider) {
  }

  ionViewDidLoad() {
  	this._LoginServiceProvider.getMembers()
  	.subscribe(

  		(res) => {
  			console.log(res);
  		},

  		(err) => {
  			console.log(err);
  		},

  		() => {
  			console.log("completed");
  		}
  		);
  }




	Login(){
		const newUser=new user();
	   
	    newUser.email=this.email;

	    newUser.password=this.password;
	    // Required Fields
	    if( this.email == undefined  || this.password == undefined){
	    this.showAlert();
	    }

	    this._LoginServiceProvider.LogIn(newUser)

    .subscribe(res=>{

      if(res.success){
         this._LoginServiceProvider.storeUserData(res.token,res.user);
         console.log(res.token,res.user);
      		let alert = this.alertCtrl.create({
            title: 'welcome',
            subTitle: 'To Your Dashboard  '+res.user.username,
            buttons: ['OK']
          });
          alert.present();
      		this.navCtrl.push(DashboardPage);
        
      }else{
        let alert = this.alertCtrl.create({
            title: 'oooopss!',
            subTitle: 'Error: '+res.msg,
            buttons: ['OK']
          });
          alert.present();
      }
      this.email="";
      this.password="";
	   
	});
}

	showAlert() {
	    		let alert = this.alertCtrl.create({
	    			title: 'oooops!',
	    			subTitle: 'Please Fill All Field',
	    			buttons: ['OK']
	    		});
	    		alert.present();
	    	}

}

 
  

