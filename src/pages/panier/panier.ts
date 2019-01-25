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

  currentNumber: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //this.products = navParams.get('item')
    this.currentNumber=1;

    console.log(this.navParams);
  }

  ionViewDidLoad() {
    //this.orders = this.navParams.get('orders');
    console.log("test");
    console.log(this.navParams.data);
    this.products = this.navParams.get('products');
    console.log("currentnumber" + this.currentNumber);

  }

  private increment () {
    console.log("increment");

    console.log(this.products);
/*    this.newOrder = new OrderResponse();
    //var ordernew = this.newOrder;
    //console.log(this.products);

    //console.log()
    this.products.forEach((product, index) => {
      //console.log("lala"+ordernew.orderLines);
      this.currentNumber++;
      //console.log(index);
      //console.log(product);
      this.newOrder.orderLines.push(new OrderLinesResponse(product._id));
      //ordernew.orderLines[index].productId=product._id;
    });

    this.newOrder.orderLines.forEach((quantity, index) => {
      console.log(index);
      this.currentNumber++;
    });

    //console.log(this.newOrder);


    //console.log(this.newOrder.orderLines);*/


  }

  private decrement () {
    console.log("increment");
    this.currentNumber--;
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
     console.log(this.newOrder);
    //this.navCtrl.push(CommandeRetraitPage, {products: this.products});

    this.navCtrl.push(CommandeRetraitPage, {newOrder: this.newOrder});
  }
}
