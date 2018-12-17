import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AProposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-a-propos',
  templateUrl: 'a-propos.html',
})
export class AProposPage {

  constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AProposPage');
  }

  logOut() {
    this.auth.logOut();
  }
}
