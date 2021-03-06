import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
//OLD exercice
import { HomePage } from '../pages/home/home';
import { CreateIssuePage } from '../pages/create-issue/create-issue';
import { IssueListPage } from '../pages/issue-list/issue-list';
import { IssueMapPage } from '../pages/issue-map/issue-map';
import { AuthProvider } from '../providers/auth/auth';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginPage} from "../pages/login/login";
import { AuthInterceptorProvider } from '../providers/auth-interceptor/auth-interceptor';
// New
import { AProposPage } from '../pages/a-propos/a-propos';
import { CommandeConfirmationPage } from '../pages/commande-confirmation/commande-confirmation';
import { CommandeGeolocPage } from '../pages/commande-geoloc/commande-geoloc';
import { CommandeRetraitPage } from '../pages/commande-retrait/commande-retrait';
import { CommandeValidationPage } from '../pages/commande-validation/commande-validation';
import { PanierPage } from '../pages/panier/panier';
import { ProduitsDetailsPage } from '../pages/produits-details/produits-details';
import { ProduitsListePage } from '../pages/produits-liste/produits-liste';
import { ProfilPage } from '../pages/profil/profil';
import { RegisterPage } from '../pages/register/register';

import { Camera } from '@ionic-native/camera';
import { ProdListeServiceProvider } from '../providers/prod-liste-service/prod-liste-service';
import { PictureProvider } from '../providers/picture/picture';
import { UserServiceProvider } from '../providers/user/user-service';
import {OrderServiceProvider} from "../providers/order/order-service";
import { Geolocation } from '@ionic-native/geolocation'
import { CommandeUserPage } from '../pages/commande-user/commande-user';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CommandeListeUserProvider } from '../providers/commande-liste-user/commande-liste-user';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateIssuePage, // TODO: add the components to "declarations".
    IssueListPage,
    IssueMapPage,
    LoginPage,
    AProposPage,
    CommandeConfirmationPage,
    CommandeGeolocPage,
    CommandeRetraitPage,
    CommandeValidationPage,
    PanierPage,
    ProduitsDetailsPage,
    ProduitsListePage,
    ProfilPage,
    RegisterPage,
    CommandeUserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    LeafletModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateIssuePage, // TODO: add the components to "entryComponents".
    IssueListPage,
    IssueMapPage,
    LoginPage,
    AProposPage,
    CommandeConfirmationPage,
    CommandeGeolocPage,
    CommandeRetraitPage,
    CommandeValidationPage,
    PanierPage,
    ProduitsDetailsPage,
    ProduitsListePage,
    ProfilPage,
    RegisterPage,
    CommandeUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AuthInterceptorProvider,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true },
    Camera,
    ProdListeServiceProvider,
    PictureProvider,
    UserServiceProvider,
    Geolocation,
    CommandeListeUserProvider,
    OrderServiceProvider,
  ]
})
export class AppModule {}
