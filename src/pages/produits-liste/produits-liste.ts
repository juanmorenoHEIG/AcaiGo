import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import {ProduitsDetailsPage} from '../produits-details/produits-details';
import {RegisterPage} from "../register/register";
import {ProdListeServiceProvider} from '../../providers/prod-liste-service/prod-liste-service';
import { ProductResponse } from '../../models/product';
import { NgModel } from '@angular/forms';


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

  nameFilter: string;

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

  seeDetails (product: ProductResponse) {
    console.log("détails", product);
    this.navCtrl.push(ProduitsDetailsPage, {product: product});
  }


  filter(){
    console.log("fil"+this.nameFilter);
    if(this.nameFilter){
      this.prodListe.getProdListeFiltered(this.nameFilter).subscribe(prodListe => {
        console.log("listefilt:" +prodListe.data);
        this.products = prodListe.data;
        console.log("this",this.products);
      }, err => {
        console.warn('Could not get new prodliste', err);
      });
    }else{
      this.prodListe.getProdListe().subscribe(prodListe => {

        this.products = prodListe.data;
      }, err => {
        console.warn('Could not get new prodliste', err);
      });
    }
  }
}
