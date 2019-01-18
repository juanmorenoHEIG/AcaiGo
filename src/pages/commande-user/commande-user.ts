import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { latLng, MapOptions, marker, Marker, tileLayer, Map } from 'leaflet';
import {CommandeListeUserProvider} from '../../providers/commande-liste-user/commande-liste-user';
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
  map:Map

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

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandeUserPage');

    this.commandeListe.getProdListe(this.navParams.get('userId')).subscribe(commandeListe => {

      console.log("liste commandes user",commandeListe);

      
      
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
