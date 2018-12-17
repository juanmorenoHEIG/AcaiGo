import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';


/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  logOut() {
    this.auth.logOut();
  }
}
