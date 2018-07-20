import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,AlertController } from 'ionic-angular';

import { map } from 'rxjs/operators';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the InsertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html',
})
export class InsertPage {
  data:any = {};
  
  constructor(public navCtrl: NavController, public http: Http) {
  this.data.username = '';
  this.data.response = '';
  
  this.http = http;
  }
  
  submit() {
  
    let body     : string   = "name=" +this.data.username,
    type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
    headers  : any      = new Headers({ 'Content-Type': type}),
    options  : any      = new RequestOptions({ headers: headers }),
    url      : any      = "http://172.17.0.1:8082/api/bears";

    this.http.post(url, body, options).map(res => res.json())
    .subscribe(data =>
    {
     
  alert(data.message);


    });
    
       }

}
