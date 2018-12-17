import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateIssuePage } from '../create-issue/create-issue';
import { IssueMapPage } from '../issue-map/issue-map';
import { IssueListPage } from '../issue-list/issue-list';

// TODO: add an interface to represent a tab.
export interface HomePageTab {
  title: string;
  icon: string;
  component: Function;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabs: HomePageTab[];

  constructor(public navCtrl: NavController) {
    // TODO: define some tabs.
    this.tabs = [
      { title: 'New Issue', icon: 'add', component: CreateIssuePage },
      { title: 'Issue Map', icon: 'map', component: IssueMapPage },
      { title: 'Issue List', icon: 'list', component: IssueListPage }
    ];
  }
}
