import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
    templateUrl: 'weather.html'
})

export class WeatherResult {
    
    constructor(public menuCtrl : MenuController){

    }
}