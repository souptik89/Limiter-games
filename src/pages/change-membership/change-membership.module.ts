import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeMembershipPage } from './change-membership';

@NgModule({
  declarations: [
    ChangeMembershipPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeMembershipPage),
  ],
})
export class ChangeMembershipPageModule {}
