import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateIssuePage } from '../create-issue/create-issue';
import { IssueMapPage } from '../issue-map/issue-map';
import { IssueListPage } from '../issue-list/issue-list';
//new
import { ProfilPage } from '../profil/profil';
import { ProduitsListePage } from '../produits-liste/produits-liste';
import { AProposPage } from '../a-propos/a-propos';




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

  

  constructor(public navCtrl: NavController){
    // TODO: define some tabs.
    this.tabs = [
      { title: 'Liste des produits', icon: 'list', component: ProduitsListePage },
      { title: 'Profil', icon: 'contact', component: ProfilPage },
      { title: 'À propos', icon: 'information-circle', component: AProposPage }
    ];
  }
}
