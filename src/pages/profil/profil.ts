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
import { CommandeUserPage} from '../commande-user/commande-user';



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
  image: UserResponse;

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
        this.image = new UserResponse();
        this.image.image = this.picture.url;
        this.userService.patchImageProfil(this.image, this.user._id).subscribe(undefined, err => {
          console.warn('Could not patch image to user', err);
        });

      }, err => {
        console.warn('Could not take picture', err);
      });

    }

  ionViewDidLoad() {
    this.auth.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user.image);
    }, err => {
      console.warn('Could not get new user', err);
    });
    console.log('ionViewDidLoad ProfilPage');
  }

  logOut() {
    this.auth.logOut();
  }

  voirCommandes(){
    console.log("test");
    this.navCtrl.push(CommandeUserPage,{userId: this.user._id});
  
  }

}
