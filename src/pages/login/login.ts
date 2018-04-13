import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterMorePage } from '../register-more/register-more';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  show: boolean;
  title: any;
  txtval: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.show = false;
    this.title = 'login';
    this.txtval = 'create account';
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotohome() {
    this.navCtrl.setRoot(HomePage);
  }
  registration() {
    if (this.show) {
      this.show = false;
      this.txtval = 'create account';
    }
    else {
      this.show = true;
      this.title = 'Register';
      this.txtval = 'Already have account? login';
    }
  }
  continueReg() {
    this.navCtrl.setRoot(RegisterMorePage);
  }
}
