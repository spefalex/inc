import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { UtilisateursApiGlobal} from '../models/utilisateursapi-global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class UtilisateursService {

    private base_url :string = "http://172.17.0.1:8082/api/";
    private source :string = "/read";
  constructor(private http : Http) {
    
  }

 public getUser() {
// const url = this.base_url +  this.source;
 const url = `${this.base_url}${this.source}`;
 return this.http.get(url)
 .toPromise()
 .then(reponse => reponse.json() as UtilisateursApiGlobal)
 .catch(error => 'une erreur est survenue'+error);
 }
}
