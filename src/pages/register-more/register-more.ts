import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardPaymentPage } from '../card-payment/card-payment';



@IonicPage()
@Component({
  selector: 'page-register-more',
  templateUrl: 'register-more.html',
})
export class RegisterMorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterMorePage');
  }
  payment() {
    this.navCtrl.push(CardPaymentPage);
  }

}
