import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserServiceProvider} from '../../providers/user/user-service';
import {UserResponse} from "../../models/user-response";
import {ProduitsDetailsPage} from "../produits-details/produits-details";
import {LoginPage} from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [UserServiceProvider]

})
export class RegisterPage {

  users: UserResponse[] = [];

  register = {
    firstname: "",
    name: "",
    email: "",
    password: "",
    address: {
      street: "",
      NPA: "",
      City: "",
    },
    image: "",
  };

  /*firstnameinvalide: boolean;
  nameinvalide: boolean;
  emailinvalide: boolean;
  passwordinvalide: boolean;
  streetinvalide: boolean;
  npainvalide: boolean;
  cityinvalide: boolean;
  imageinvalide: boolean;*/
  FormError: boolean;


  @ViewChild(NgForm)
  form: NgForm;

  

  logForm(){
    console.log(this.register);
  }

  constructor(
    private auth: AuthProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private userRegister: UserServiceProvider
  ){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    console.log(this.register);
  }

  submitUser() {
    //this.users.push(this.UserService.getJoke());

    
    console.log(this.register);
    this.userRegister.addUser(this.register).subscribe(user => {
      this.users.push(user);
      console.log(user);
    }, err => {
      console.warn('Could not get new user', err);
    });
    console.log(this.users);
    this.navCtrl.push(LoginPage);

  }

  onSubmit($event){
    // Prevent default HTML form behavior.
    $event.preventDefault();

    // Do not do anything if the form is invalid.
    if (this.form.invalid) {
      return;
    }
    this.FormError = false;
    

    this.navCtrl.push(LoginPage);
  }

}
