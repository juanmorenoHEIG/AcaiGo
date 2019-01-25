import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProdListeServiceProvider} from '../../providers/prod-liste-service/prod-liste-service';
import { ProductResponse } from '../../models/product';
import { OrderResponse } from "../../models/order";
import {CommandeRetraitPage} from "../commande-retrait/commande-retrait";
import {OrderLinesResponse} from "../../models/orderLines";
import {OrderLinesFullResponse} from "../../models/orderLineFull";
import { OrderFullResponse } from '../../models/orderFull';

/**
 * Generated class for the PanierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html',
})
export class PanierPage {

  products: ProductResponse[];
  orderFull: OrderFullResponse;
  orders: OrderResponse;


  constructor(public navCtrl: NavController, public navParams: NavParams, private prod: ProdListeServiceProvider) {
    this.orders = this.navParams.data.orders;
    this.products = [];
    this.orderFull = new OrderFullResponse();
    this.orderFull.orderLines = [];
  }

  ionViewDidLoad() {
    console.log("hola");
    this.orders.orderLines.forEach((orderline, index) => {
      this.prod.getProdById(orderline.productId).subscribe(data => {
        
      this.orderFull.orderLines.push(new OrderLinesFullResponse(data, orderline.quantity));
          console.log(this.orderFull);

        }, err => {
          console.warn('Could not get the product', err);
        });
      });

  }

  /* private increment () {
    console.log("increment");

    

  }

  private decrement () {
    console.log("decrement");
  } */

  order(){
   console.log("hola");


    this.navCtrl.push(CommandeRetraitPage, {newOrder: this.orders});
  }
}
