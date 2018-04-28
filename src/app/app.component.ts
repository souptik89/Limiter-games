import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';
import { RegisterMorePage } from '../pages/register-more/register-more';
import { CardPaymentPage } from '../pages/card-payment/card-payment';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PurchasedgamePage } from '../pages/purchasedgame/purchasedgame';
import { CurrentrentedPage } from '../pages/currentrented/currentrented';
import { InQueuePage } from '../pages/in-queue/in-queue';
import { TradeInPage } from '../pages/trade-in/trade-in';
import { OrderhistoryPage } from '../pages/orderhistory/orderhistory';
import { ChangeMembershipPage } from '../pages/change-membership/change-membership';
import { ReportProblemPage } from '../pages/report-problem/report-problem';
import { ReferPage } from '../pages/refer/refer';
import { MailPage } from '../pages/mail/mail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PurchasedgamePage;

  pages: Array<{ icon: string, title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home', title: 'Home', component: HomePage },
      { icon: 'game-controller-b', title: 'Purchased Games', component: PurchasedgamePage },
      { icon: 'checkmark-circled', title: 'Current Rented Games', component: CurrentrentedPage },
      { icon: 'bookmark', title: 'Games in Queue', component: InQueuePage },
      { icon: 'bonfire', title: 'Trade-ins', component: TradeInPage },
      { icon: 'clipboard', title: 'Shipping/Billing Address', component: RegisterMorePage },
      { icon: 'home', title: 'Payments', component: CardPaymentPage },
      { icon: 'email', title: 'E-mail Subscription', component: MailPage },
      { icon: 'bag', title: 'Order History', component: OrderhistoryPage },
      { icon: 'arrow-graph-up-right', title: 'Change Membership', component: ChangeMembershipPage },
      { icon: 'sad', title: 'Report a Problem', component: ReportProblemPage },
      { icon: 'person-add', title: 'Refer A Friend', component: ReferPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
