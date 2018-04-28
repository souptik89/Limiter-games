import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterMorePage } from '../pages/register-more/register-more';
import { CardPaymentPage } from '../pages/card-payment/card-payment';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PurchasedgamePage } from '../pages/purchasedgame/purchasedgame';
import { CurrentrentedPage } from '../pages/currentrented/currentrented';
import { InQueuePage } from '../pages/in-queue/in-queue';
import { TradeInPage } from '../pages/trade-in/trade-in';
import { OrderhistoryPage } from '../pages/orderhistory/orderhistory';
import { ChangeMembershipPage } from '../pages/change-membership/change-membership';
import { ReportProblemPage } from '../pages/report-problem/report-problem';
import { ReferPage } from '../pages/refer/refer';
import { MailPage } from '../pages/mail/mail';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterMorePage,
    CardPaymentPage,
    HomePage,
    ListPage,
    PurchasedgamePage,
    CurrentrentedPage,
    InQueuePage,
    TradeInPage,
    OrderhistoryPage,
    ChangeMembershipPage,
    ReportProblemPage,
    ReferPage,
    MailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      //  backButtonText: 'Go Back',

      pageTransition: 'ios-transition',

    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterMorePage,
    CardPaymentPage,
    HomePage,
    ListPage,
    PurchasedgamePage,
    CurrentrentedPage,
    InQueuePage,
    TradeInPage,
    OrderhistoryPage,
    ChangeMembershipPage,
    ReportProblemPage,
    ReferPage,
    MailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
