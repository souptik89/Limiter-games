import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TradeInPage } from './trade-in';

@NgModule({
  declarations: [
    TradeInPage,
  ],
  imports: [
    IonicPageModule.forChild(TradeInPage),
  ],
})
export class TradeInPageModule {}
