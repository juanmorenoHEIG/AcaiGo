import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';


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

  constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitsListePage');
  }

  logOut() {
    this.auth.logOut();
  }
}
