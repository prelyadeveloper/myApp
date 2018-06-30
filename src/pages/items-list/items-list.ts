import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BarCodePage} from "../bar-code/bar-code";
import {QrCodePage} from "../qr-code/qr-code";

/**
 * Generated class for the ItemsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-items-list',
  templateUrl: 'items-list.html',
})
export class ItemsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    selectItem(type){
    if(type == 'qr') {
        this.navCtrl.push(QrCodePage);
    }
    if(type == 'bar')
        this.navCtrl.push(BarCodePage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsListPage');
  }

}
