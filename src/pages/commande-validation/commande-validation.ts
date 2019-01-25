import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductResponse } from '../../models/product';
import {ProdListeServiceProvider} from '../../providers/prod-liste-service/prod-liste-service';
import { OrderResponse } from "../../models/order";
import { OrderServiceProvider} from '../../providers/order/order-service';



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

  products: ProductResponse[];
  orders: OrderResponse;


  constructor(public navCtrl: NavController, public navParams: NavParams, private prod: ProdListeServiceProvider, private orderPost: OrderServiceProvider) {
    this.orders = this.navParams.data.orders;
    this.products = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandeValidationPage');
this.orders.state = "En cours";
    
    console.log(this.orders);
    this.orders.orderLines.forEach((orderline, index) => {
      this.prod.getProdById(orderline.productId).subscribe(data => { 
      this.products.push(data);

        }, err => {
          console.warn('Could not get new prodliste', err);
        });
    });

  }

  submitOrder()
  {
    console.log("Commander!")
   /*  this.orderPost.pushOrder(this.orders).subscribe(order => {
     
      console.log(order);
    }, err => {
      console.warn('Could not create new order', err);
    }); */
  }

}
