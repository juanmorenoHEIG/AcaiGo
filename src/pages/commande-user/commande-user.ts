import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { latLng, MapOptions, marker, Marker, tileLayer, Map } from 'leaflet';
import {CommandeListeUserProvider} from '../../providers/commande-liste-user/commande-liste-user';
import {OrderResponse} from '../../models/order';
import {pickupPlaceResponse} from '../../models/pickupPlace';
import { JsonPipe } from '@angular/common';
/**
 * Generated class for the CommandeUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-commande-user',
  templateUrl: 'commande-user.html',
  providers: [CommandeListeUserProvider]
})
export class CommandeUserPage {

  mapOptions: MapOptions;
  mapMarkers: Marker[];
  map:Map;
  
  pickupPlace: pickupPlaceResponse;
  order: OrderResponse;


  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation,private commandeListe: CommandeListeUserProvider) {
    const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = { maxZoom: 18 };
    this.mapOptions = {
      layers: [
        tileLayer(tileLayerUrl, tileLayerOptions)
      ],
      zoom: 13,
      center: latLng(46.778186, 6.641524)
    };
    
    this.mapMarkers = []   
    
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad CommandeUserPage');

    this.commandeListe.getProdListe(this.navParams.get('userId')).subscribe(commandeListe => {

      console.log("liste commandes user",commandeListe);
      
      //var j = JSON.parse(commandeListe)
      var j = Object.keys(commandeListe).length;
     //j--;

      for(var i = 0; i < j; i++){
        //console.log(commandeListe[i].pickup_place)
        //this.pickupPlace = commandeListe[i].pickup_place
        this.order = JSON.parse(JSON.stringify(commandeListe[i]));
        console.log(this.order.pickup_place[0].location_lon)
        this.mapMarkers.push(marker([this.order.pickup_place[0].location_lat,this.order.pickup_place[0].location_lon]).bindTooltip(this.order.state))
               
      }

    }, err => {
      console.warn('Could not get new commandeListe', err);
    });

    const geolocationPromise = this.geolocation.getCurrentPosition();
    geolocationPromise.then(position => {
      const coords = position.coords;
      console.log(`User is at ${coords.longitude}, ${coords.latitude}`);
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });
  }

  ionViewDidEnter(){
    this.map.invalidateSize()
  }

  onMapReady(map: Map) {
    this.map = map;
  }


}
