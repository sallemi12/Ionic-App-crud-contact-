import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { UpdateContactPage } from '../pages/update-contact/update-contact';
import { AddContactPage } from '../pages/add-contact/add-contact';
import { RegisterPage } from '../pages/register/register';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,private _LoginServiceProvider:LoginServiceProvider, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    
    _LoginServiceProvider.loggedIn();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
       { title: 'Register', component: RegisterPage },
      { title: 'Dashboard', component: DashboardPage },
     

    ];
    if(!this._LoginServiceProvider.loggedIn()){//not logged in 
      this.pages.splice(3,1);
    }
    if(this._LoginServiceProvider.loggedIn()){//logged
      this.pages.splice(1,2)
    }
   

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
      
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    this.nav.setRoot(page.component);
  }
}
