import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateIssuePage } from '../pages/create-issue/create-issue';
import { IssueListPage } from '../pages/issue-list/issue-list';
import { IssueMapPage } from '../pages/issue-map/issue-map';
import { AuthProvider } from '../providers/auth/auth';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginPage} from "../pages/login/login";
import { AuthInterceptorProvider } from '../providers/auth-interceptor/auth-interceptor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateIssuePage, // TODO: add the components to "declarations".
    IssueListPage,
    IssueMapPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateIssuePage, // TODO: add the components to "entryComponents".
    IssueListPage,
    IssueMapPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AuthInterceptorProvider,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true }
  ]
})
export class AppModule {}
