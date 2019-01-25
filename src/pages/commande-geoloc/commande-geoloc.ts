import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { OrderResponse } from "../../models/order";
import { pickupPlaceResponse } from '../../models/pickupPlace';
import { CommandeValidationPage } from '../commande-validation/commande-validation';


/**
 * Generated class for the CommandeGeolocPage
 * page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-commande-geoloc',
  templateUrl: 'commande-geoloc.html',
})
export class CommandeGeolocPage {

  orders: OrderResponse;

  constructor(public navCtrl: NavController,private geolocation: Geolocation, public navParams: NavParams) {
    this.orders = this.navParams.data.orders;
  }

  ionViewDidLoad() {
    console.log(this.orders);

    const geolocationPromise = this.geolocation.getCurrentPosition();
    geolocationPromise.then(position => {
      const coords = position.coords;
      console.log(`User is at ${coords.longitude}, ${coords.latitude}`);
      this.orders.pickup_place = new pickupPlaceResponse(coords.longitude, coords.latitude);
      console.log(this.orders);

    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });
  }

  submitPosition()
  {
    this.navCtrl.push(CommandeValidationPage, {orders: this.orders});
  }


}
