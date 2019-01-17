import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProdListeServiceProvider} from '../../providers/prod-liste-service/prod-liste-service';
import { ProductResponse } from '../../models/product';
import {CommandeRetraitPage} from "../commande-retrait/commande-retrait";

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


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //this.products = navParams.get('item')

  }

  ionViewDidLoad() {
/*    console.log('ionViewDidLoad ProduitsListePage');
    this.productId.getProductById(1).subscribe(productId => {
      this.products = productId.data;
    }, err => {
      console.warn('Could not get the product', err);
    });*/
    this.products = this.navParams.get('products');

  }

  order(){
    console.log("order");
    this.navCtrl.push(CommandeRetraitPage);

  }
}
