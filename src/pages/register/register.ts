import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { user } from '../../pages/login/user';
import	{LoginPage} from '../login/login';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	member:user;
	username:string;
	email:string;
	password:string;
	password2:string;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams,private _LoginServiceProvider:LoginServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
   Register(){
  	

    const newMember=new user();
    newMember.username=this.username;
    newMember.email=this.email;
    newMember.password=this.password;
    newMember.password2=this.password2;
    console.log(newMember);
    // Required Fields
    if( this.email == undefined || this.username == undefined || this.password == undefined|| this.password2 == undefined){
       let alert = this.alertCtrl.create({
            title: 'oooops !!',
            subTitle: 'Please Fill all Fields',
            buttons: ['OK']
          });
          alert.present();
    }
    if(this.password !==this.password2){
    let alert = this.alertCtrl.create({
            title: 'oooops!!',
            subTitle: 'Password miss match',
            buttons: ['OK']
          });
          alert.present();
    }


    
    this._LoginServiceProvider.Register(newMember)
    .subscribe(member => {
      
       if(member.success){

         let alert = this.alertCtrl.create({
            title: 'Congratulation',
            subTitle: member.msg,
            buttons: ['OK']
          });
          alert.present();
        this.navCtrl.push(LoginPage);
         
        }else{
          let alert = this.alertCtrl.create({
            title: 'oooops!!',
            subTitle: member.msg,
            buttons: ['OK']
          });
          alert.present();
         
        }
     

    
    });

    this.username="";
    this.email="";
    this.password="";
    this.password2="";

  }

}
