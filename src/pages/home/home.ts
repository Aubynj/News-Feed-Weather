import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Network } from '@ionic-native/network';
import { NavController, MenuController, ToastController, AlertController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { ItemNewsPage } from '../newsItem/itemNews';
import { Button } from 'ionic-angular/components/button/button';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:string[];
  fetchme:any;
  connection : Subscription;
  disconnection : Subscription;

  buttonIcon : boolean = false;

  constructor(private network: Network,private alertCtrl: AlertController, public navCtrl: NavController,public menuCtrl: MenuController,public toastCtrl : ToastController,private http: Http){

  }

  //Pull request goes here
  doRefresh(refresher){
    setTimeout(()=>{
      console.log("Please wait...");
      this.http.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=9d705a1050f846db88fa5840e9875a0b")
      .map(res => res.json())
      .subscribe(data => {
          this.fetchme = data.articles;
          
          this.items = [];
  
          for(let i = 0; i < this.fetchme.length; i++){
            this.items.push(this.fetchme[i]);
          }
          console.log(this.items);
      },
        err =>{
          console.log("Error in reading data");
    }); 

      refresher.complete();
    },5000);

  }
  

  //API ()==>{9d705a1050f846db88fa5840e9875a0b} 
  ngOnInit() {
    if(this.network.type === 'none'){
      console.log("Network error");
    }

    this.http.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=9d705a1050f846db88fa5840e9875a0b")
    .map(res => res.json())
    .subscribe(data => {
        this.fetchme = data.articles;
        
        this.items = [];

        for(let i = 0; i < this.fetchme.length; i++){
          this.items.push(this.fetchme[i]);
        }
        console.log(this.items);
    },
      err =>{
        let alert = this.alertCtrl.create({
          title : "Network",
          subTitle : "Network is disconnected",
          buttons : ['dismiss']
        })
        alert.present();
  });  
}

ionViewDidEnter() {
  this.connection = this.network.onConnect().subscribe(data => {
    console.log(data);
    this.displayNetworkUpdate(data.type);
  }, error => console.error(error));
 
  this.disconnection = this.network.onDisconnect().subscribe(data => {
    console.log(data)
    this.displayNetworkUpdate(data.type);
  }, error => console.error(error));
}



displayNetworkUpdate(connectionState: string){
  let networkType = this.network.type;
  this.toastCtrl.create({
    message: `You are now ${connectionState} via ${networkType}`,
    duration: 3000
  }).present();
}

ionViewWillLeave(){
  this.connection.unsubscribe();
  this.disconnection.unsubscribe();
}

  //Let watch a network connectivity
  toggleMenu(){
    console.log(this.fetchme);
    console.log(this.fetchme[0])
  }

  store(item){
    if(item){
      this.buttonIcon = true;
    }else{
      this.buttonIcon = false;
    }



  }

  newsTapped(event,item){
    this.navCtrl.push(ItemNewsPage,{
      item: item 
    })
  }

  
  


}
