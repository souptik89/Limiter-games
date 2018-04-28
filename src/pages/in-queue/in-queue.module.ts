import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InQueuePage } from './in-queue';

@NgModule({
  declarations: [
    InQueuePage,
  ],
  imports: [
    IonicPageModule.forChild(InQueuePage),
  ],
})
export class InQueuePageModule {}
