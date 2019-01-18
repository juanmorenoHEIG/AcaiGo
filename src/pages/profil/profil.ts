import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { QimgImage } from '../../models/qimg-image';
import { PictureProvider } from '../../providers/picture/picture';
import { UserResponse } from '../../models/user-response';
import { UserServiceProvider } from '../../providers/user/user-service';
import { ImgRequest } from '../../models/imgRequest';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';


/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  pictureData: string;
  picture: QimgImage;
  user: UserResponse;
  userImgPatch: UserResponse;
  userNewEmail: UserResponse;
  userSubscription: Subscription;
  public show: boolean = false;
  public deleteUser: boolean = false;
  emailNew: string;
  newEmailToSave: string;

  constructor(
    private camera: Camera,
    private pictureService: PictureProvider, 
    private auth: AuthProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userService:UserServiceProvider) 
    {

    }

    takePicture() {
      this.pictureService.takeAndUploadPicture().subscribe(picture => {
        this.picture = picture;
        this.userImgPatch = new UserResponse();
        this.userImgPatch.image = this.picture.url;
        console.log(this.userImgPatch);
        this.userService.patchImageProfil(this.userImgPatch, this.user._id).subscribe(user => {
          this.auth.updateUser(user).subscribe();
        }, err => {
          console.warn('Could not patch image to user', err);
        });

      }, err => {
        console.warn('Could not take picture', err);
      });

    }

    toggleForm() {
      this.show = !this.show;
      return;
    }

    toggleConfirmDelete() {
      this.deleteUser = !this.deleteUser;
      return;
    }


    updateEmail(form: NgForm){
      if (form.valid) {
        this.userNewEmail= new UserResponse();
        this.userNewEmail.email = this.emailNew;
        console.log("New mail:"+ this.userNewEmail);
        this.userService.patchEmail(this.userNewEmail, this.user._id).subscribe(user => {
          this.auth.updateUser(user).subscribe();
          this.toggleForm();
        }, err => {
          console.warn('Could not patch image to user', err);
        }); 
 
      }

    }

    deleteUserAccount()
    {
      
console.log("yaaaaay");
    }

  ionViewDidLoad() {
    this.userSubscription = this.auth.getUser().subscribe(user => {
      if (user) {
        this.user = user;
      }
    }, err => {
      console.warn('Could not get new user', err);
    });
    console.log('ionViewDidLoad ProfilPage');
  }

  ionViewDidLeave() {
    this.userSubscription.unsubscribe();
  }

  logOut() {
    this.auth.logOut();
  }

}
