import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

/**
 * Generated class for the UtilisateursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-utilisateurs',
  templateUrl: 'utilisateurs.html',
})
export class UtilisateursPage {
nom : string;
prenom: string;
age:string;
public items : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http   : Http) {
    this.nom = navParams.get('nom');
    this.prenom = navParams.get('prenom');
    this.age = navParams.get('age');
    // console.log(this.nom);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UtilisateursPage');
  }
  ionViewWillEnter()
  {
     this.load();
  }


  load()
  {
     this.http.get('http://172.17.0.1:8082/api/read')
     .map(res => res.json())
     .subscribe(data =>
     {
        this.items = data;
     });
  }

}
