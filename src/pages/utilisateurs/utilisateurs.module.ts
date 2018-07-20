import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UtilisateursPage } from './utilisateurs';

@NgModule({
  declarations: [
    UtilisateursPage,
  ],
  imports: [
    IonicPageModule.forChild(UtilisateursPage),
  ],
})
export class UtilisateursPageModule {}
