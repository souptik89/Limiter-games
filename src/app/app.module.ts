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

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterMorePage,
    CardPaymentPage,
    HomePage,

    ListPage
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
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
