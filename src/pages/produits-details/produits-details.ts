import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductResponse} from '../../models/product'

/**
 * Generated class for the ProduitsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produits-details',
  templateUrl: 'produits-details.html',
})
export class ProduitsDetailsPage{
  
  product: ProductResponse;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ProduitsDetailsPage');
    console.log(this.navParams);
    this.product = this.navParams.get('product');
  }

}
