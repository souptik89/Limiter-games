import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CardPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-payment',
  templateUrl: 'card-payment.html',
})
export class CardPaymentPage {
  card: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.card = 'New-Card';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPaymentPage');
  }
  gotohome() {
    this.navCtrl.setRoot(HomePage);
  }
}
