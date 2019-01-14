import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserServiceProvider} from '../../providers/user/user-service';
import {UserResponse} from "../../models/user-response";

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
    address: {}
  }
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
  }

  submitUser() {
    //this.users.push(this.UserService.getJoke());
    this.userRegister.addUser(this.register).subscribe(user => {
      this.users.push(user);
      console.log(user);
    }, err => {
      console.warn('Could not get new user', err);
    });
  }

}
