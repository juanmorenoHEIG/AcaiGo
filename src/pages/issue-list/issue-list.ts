import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the IssueListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-issue-list',
  templateUrl: 'issue-list.html',
})
export class IssueListPage {

  constructor(
    private auth: AuthProvider,
    // TODO: inject the HTTP client.
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    // TODO: make an HTTP request to retrieve the trips.
    const url = 'https://comem-travel-log-api.herokuapp.com/api/trips';
    this.http.get(url).subscribe(trips => {
      console.log(`Trips loaded`, trips);
    });
  }

}
