import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, ToastController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { HomePage } from '../pages/home/home';
import { WeatherResult } from '../pages/weather/weather';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = HomePage;
  

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController,private network : Network,public toast: ToastController, public alertCtrl: AlertController) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
 }

 

 
  openHome(){
    this.menu.close();
    console.log(HomePage);
    this.nav.setRoot(HomePage);

  }
  OpenWeather(){
    //this.menu.close();

    //this.nav.setRoot(WeatherResult);
     

    let toast = this.toast.create({
      message : "Coming soon",
      duration : 3000
    }).present();
  }
  whatNew(){
    let alert = this.alertCtrl.create({
      title: " About",
      subTitle : "Version: Beta v.0.0",
      buttons : ['dismiss']
    });
    alert.present();
  }
  
  
  
}

