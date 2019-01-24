import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProdListeServiceProvider} from '../../providers/prod-liste-service/prod-liste-service';
import { ProductResponse } from '../../models/product';
import { OrderResponse } from "../../models/order";
import {LoginPage} from "../login/login";
import {UserServiceProvider} from "../../providers/user/user-service";
import {OrderServiceProvider} from "../../providers/order/order-service";
import {CommandePaiementPage} from "../commande-paiement/commande-paiement";


/**
 * Generated class for the CommandeRetraitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-commande-retrait',
  templateUrl: 'commande-retrait.html',
})
export class CommandeRetraitPage {

  products: ProductResponse[];

  orders: OrderResponse[];

  date: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private orderDate: OrderServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandeRetraitPage');
    console.log(this.navParams);
    console.log(this.products);
    console.log(this.orders);

    this.products = this.navParams.get('products');
  }

  submitDate(){
    console.log("submit date");
    this.navCtrl.push(CommandePaiementPage);
  }

}
