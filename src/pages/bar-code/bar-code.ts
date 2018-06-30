import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import JsBarcode from 'jsbarcode';

/**
 * Generated class for the BarCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bar-code',
  templateUrl: 'bar-code.html',
})
export class BarCodePage {

    @ViewChild('barcode') barcode: ElementRef;
    ngAfterViewInit() {
        JsBarcode(this.barcode.nativeElement, '12345');
    }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarCodePage');
  }

}
