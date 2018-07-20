import { Component } from '@angular/core';
import { NavController ,AlertController } from 'ionic-angular';
import { UtilisateursPage } from '../utilisateurs/utilisateurs';
import { InsertPage } from '../insert/insert';
import { UtilisateursService } from '../../services/utilisateurs.service';
import {UtilisateursApiGlobal } from '../../models/utilisateursapi-global';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
      nom : string;
      prenom: string;
      age:string;
      users : any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private userService:UtilisateursService)
   {
  console.log("road to jamaic");
  this.userService.getUser().then(
 newsFetched=>{

this.users = newsFetched;
console.log(this.users);
 }

  );
    }
  private showDetail(){
                let alert =this.alertCtrl.create({
                title :"salut",
                subTitle:"Road to jamaic",
                buttons: ["OK"],
                });
                alert.present();
                }
  
  private road(){
  this.navCtrl.push(UtilisateursPage ,{nom:this.nom,prenom:this.prenom,age:this.age});
// console.log(this.nom);
    }
    private insert(){
      this.navCtrl.push(InsertPage);
    // console.log(this.nom);
        }
}
