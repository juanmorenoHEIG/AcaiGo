import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import {ProduitsDetailsPage} from '../produits-details/produits-details';
import {RegisterPage} from "../register/register";
import {ProdListeServiceProvider} from '../../providers/prod-liste-service/prod-liste-service';
import { ProductResponse } from '../../models/product';

/**
 * Generated class for the ProduitsListePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produits-liste',
  templateUrl: 'produits-liste.html',
  providers: [ProdListeServiceProvider]
})
export class ProduitsListePage {

  products: ProductResponse[];

  constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams, private prodListe: ProdListeServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitsListePage');
    this.prodListe.getProdListe().subscribe(prodListe => {
      this.products = prodListe.data;
    }, err => {
      console.warn('Could not get new prodliste', err);
    });
    console.log(this.prodListe);
  }

  logOut() {
    this.auth.logOut();
  }

  seeDetails () {
    console.log("détails");
    this.navCtrl.push(ProduitsDetailsPage);
  }
}
