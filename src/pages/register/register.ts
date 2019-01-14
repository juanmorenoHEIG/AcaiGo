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

  firstname: string;
  users: UserResponse[];
  displayedFirstName: string;

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

  addUser() {
    //this.users.push(this.UserService.getJoke());
    this.userRegister.addUser().subscribe(user => {
      this.users.push(user);
    }, err => {
      console.warn('Could not get new user', err);
    });
  }

  displayFirstName(){
    this.displayedFirstName = this.firstname;
    console.log(this.displayedFirstName);
  }

}
