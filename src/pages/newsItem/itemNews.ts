import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FabContainer } from 'ionic-angular/components/fab/fab-container';

@Component({
    templateUrl: 'itemNews.html'
})

export class ItemNewsPage{
    itemSelected: any;
    
    constructor(public navCtrl: NavController, public navparams: NavParams){
        this.itemSelected = navparams.get('item');
        console.log(this.itemSelected);
    }

    share(socialNet: string, fab: FabContainer) {
        fab.close();
        console.log("Sharing in", socialNet);
      }
}