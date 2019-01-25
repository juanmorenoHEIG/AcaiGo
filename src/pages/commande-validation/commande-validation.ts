import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductResponse } from '../../models/product';
import {ProdListeServiceProvider} from '../../providers/prod-liste-service/prod-liste-service';
import { OrderResponse } from "../../models/order";
import { OrderServiceProvider} from '../../providers/order/order-service';
import {OrderLinesFullResponse} from "../../models/orderLineFull";
import { OrderFullResponse } from '../../models/orderFull';
import {CommandeConfirmationPage} from "../commande-confirmation/commande-confirmation";




/**
 * Generated class for the CommandeValidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-commande-validation',
  templateUrl: 'commande-validation.html',
  providers: [ProdListeServiceProvider]
})
export class CommandeValidationPage {

  orders: OrderResponse;
  orderFull: OrderFullResponse;


  constructor(public navCtrl: NavController, public navParams: NavParams, private prod: ProdListeServiceProvider, private orderPost: OrderServiceProvider) {
    this.orders = this.navParams.data.orders;
    
    this.orderFull = new OrderFullResponse();
    this.orderFull.orderLines = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandeValidationPage');
this.orders.state = "En cours";
    
    console.log(this.orders);
    this.orders.orderLines.forEach((orderline, index) => {
      this.prod.getProdById(orderline.productId).subscribe(data => { 
      this.orderFull.orderLines.push(new OrderLinesFullResponse(data, orderline.quantity));
      console.log(this.orderFull);


        }, err => {
          console.warn('Could not get the product', err);
        });
    });

  }

  submitOrder()
  {
    
   this.orderPost.pushOrder(this.orders).subscribe(order => {
      console.log("Commande dans DB!");
      this.navCtrl.push(CommandeConfirmationPage);
    }, err => {
      console.warn('Could not create new order', err);
    });
  }

}
