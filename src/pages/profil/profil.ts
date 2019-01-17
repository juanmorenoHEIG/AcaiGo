import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { QimgImage } from '../../models/qimg-image';
import { PictureProvider } from '../../providers/picture/picture';


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

  constructor(
    private camera: Camera,
    private pictureService: PictureProvider, 
    private auth: AuthProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams) 
    {

    }



    takePicture() {
      this.pictureService.takeAndUploadPicture().subscribe(picture => {
        this.picture = picture;
      }, err => {
        console.warn('Could not take picture', err);
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  logOut() {
    this.auth.logOut();
  }

}
