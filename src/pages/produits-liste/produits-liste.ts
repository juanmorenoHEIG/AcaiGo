import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import {ProduitsDetailsPage} from '../produits-details/produits-details';
import {RegisterPage} from "../register/register";
import {ProdListeServiceProvider} from '../../providers/prod-liste-service/prod-liste-service';

/**
 * Generated class for the ProduitsListePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produits-liste',
  templateUrl: 'produits-liste.html',
})
export class ProduitsListePage {

  constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams, private prodListe: ProdListeServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitsListePage');
    this.prodListe.getProdListe().subscribe();
  }

  logOut() {
    this.auth.logOut();
  }

  seeDetails () {
    console.log("détails");
    this.navCtrl.push(ProduitsDetailsPage);
  }
}
