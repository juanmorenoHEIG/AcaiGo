import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import {ProduitsDetailsPage} from '../produits-details/produits-details';
import {RegisterPage} from "../register/register";
import {ProdListeServiceProvider} from '../../providers/prod-liste-service/prod-liste-service';
import { ProductResponse } from '../../models/product';
import {PanierPage} from "../panier/panier";
import { NgModel } from '@angular/forms';
import {OrderLinesResponse} from "../../models/orderLines";
import {OrderResponse} from "../../models/order";


/**
 * Generated class for the ProduitsListePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-produits-liste',
  templateUrl: 'produits-liste.html',
  providers: [ProdListeServiceProvider]
})


export class ProduitsListePage {


  products: ProductResponse[];
  orders: OrderResponse;

  addedProducts: ProductResponse[];
  nameFilter: string;
  productQuantity: any;


  constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams, private prodListe: ProdListeServiceProvider) {

    this.addedProducts = [];
    this.orders = new OrderResponse();
    this.orders.orderLines = [];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitsListePage');
    this.prodListe.getProdListe().subscribe(prodListe => {

      console.log(prodListe.data[0]);
      console.log(this.products);
      this.products = prodListe.data;
    }, err => {
      console.warn('Could not get new prodliste', err);
    });
    console.log(this.prodListe);
  }

  logOut() {
    this.auth.logOut();
  }

  seeDetails (product: ProductResponse) {
    console.log("détails", product);
    this.navCtrl.push(ProduitsDetailsPage, {product: product});
  }


  addProduct (product: ProductResponse) {

<<<<<<< HEAD
    let alreadyInCart = false;
    if(this.orders.orderLines.length > 0)
    {
      this.orders.orderLines.forEach((orderline, index) =>{

        if(orderline.productId == product._id)
      {
        alreadyInCart = true;
        orderline.quantity++;
      }
    
      });
    }

    if(alreadyInCart==false)
    { 
      this.orders.orderLines.push(new OrderLinesResponse (product._id, 1));
    }
=======
      //console.log(products);
    this.addedProducts.push(product);
    let index = this.addedProducts.findIndex(x => x._id == product._id);
    console.log(index);
/*    this.productQuantity = index;

    console.log(this.productQuantity);*/
    //console.log(product);

// ...

    //console.log(this.addedProducts);
>>>>>>> 652dc90f1ec24462cf3a56004d9603bfc08c4795

  }


  seeCart () {

    this.navCtrl.push(PanierPage, {orders: this.orders});
  }

  filter(){
    console.log("fil"+this.nameFilter);
    if(this.nameFilter){
      this.prodListe.getProdListeFiltered(this.nameFilter).subscribe(prodListe => {
        console.log("listefilt:" +prodListe.data);
        this.products = prodListe.data;
        console.log("this",this.products);
      }, err => {
        console.warn('Could not get new prodliste', err);
      });
    }else{
      this.prodListe.getProdListe().subscribe(prodListe => {

        this.products = prodListe.data;
      }, err => {
        console.warn('Could not get new prodliste', err);
      });
    }
  }
}
