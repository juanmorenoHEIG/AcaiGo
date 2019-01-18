import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProdListeServiceProvider} from '../../providers/prod-liste-service/prod-liste-service';
import { ProductResponse } from '../../models/product';
import { OrderResponse } from "../../models/order";
import {CommandeRetraitPage} from "../commande-retrait/commande-retrait";
import {OrderLinesResponse} from "../../models/orderLines";

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

  newOrder : OrderResponse;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //this.products = navParams.get('item')

    console.log(this.navParams);
  }

  ionViewDidLoad() {

    //this.orders = this.navParams.get('orders');

    console.log(this.navParams);
    this.products = this.navParams.get('products');

  }

  order(){
    console.log("Nouvelle commande :",this.products);
    this.newOrder = new OrderResponse();
    //var ordernew = this.newOrder;

    //console.log()
    this.products.forEach((product, index) => {
      //console.log("lala"+ordernew.orderLines);
      console.log(index);
      this.newOrder.orderLines.push(new OrderLinesResponse(product._id));
      //ordernew.orderLines[index].productId=product._id;
      //console.log(ordernew);
    });
    //this.newOrder.orderLines[0].productId
     console.log(this.newOrder)
    //this.navCtrl.push(CommandeRetraitPage, {products: this.products});
  }
}
