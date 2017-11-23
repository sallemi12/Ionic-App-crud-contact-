import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage)
  ],
})
export class LoginPageModule {
	

	constructor(public auth: Auth, public user: User){}


}
