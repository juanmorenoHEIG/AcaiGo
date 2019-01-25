import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProdListeServiceProvider} from '../../providers/prod-liste-service/prod-liste-service';
import { ProductResponse } from '../../models/product';
import { OrderResponse } from "../../models/order";
import {LoginPage} from "../login/login";
import {UserServiceProvider} from "../../providers/user/user-service";
import {OrderServiceProvider} from "../../providers/order/order-service";
import {CommandeGeolocPage} from "../commande-geoloc/commande-geoloc";


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

  orders: OrderResponse;

  day: any  = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, private orderDate: OrderServiceProvider) {

    this.orders = this.navParams.data.newOrder;
  }

  ionViewDidLoad() {
  
  }

  submitDate(){
    console.log("submit date");

    this.orders.pickup_date = this.day;

    console.log(this.orders);
    this.navCtrl.push(CommandeGeolocPage, {orders: this.orders});
  }

}
