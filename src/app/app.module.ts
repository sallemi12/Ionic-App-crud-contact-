import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AddContactPage } from '../pages/add-contact/add-contact';
import { UpdateContactPage } from '../pages/update-contact/update-contact';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CloudModule,CloudSettings} from '@ionic/cloud-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { IonicStorageModule } from '@ionic/storage';
import { ContactserviceProvider } from '../providers/contactservice/contactservice';
import { RegisterPage } from '../pages/register/register';
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'APP_ID'
  }
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    DashboardPage,
       AddContactPage,
    UpdateContactPage,
    RegisterPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), IonicStorageModule.forRoot(),HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    DashboardPage,
    AddContactPage,
    UpdateContactPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider,
    ContactserviceProvider,


  ]
})
export class AppModule {}
