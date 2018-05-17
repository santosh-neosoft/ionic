import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import {Observable} from 'rxjs/Observable';
// import { HttpClient } from '@angular/common/http';

import { ApiProvider } from './../../providers/api/api';
/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;
  // constructor(public navCtrl: NavController, public httpClient: HttpClient) {
  //   this.films = this.httpClient.get('https://swapi.co/api/films');
  //   this.films
  //   .subscribe(data => {
  //     console.log('my data: ', data);
  //   })
  // }
  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.films = this.apiProvider.getFilms();
    this.films
    .subscribe(data => {
      console.log('my data: ', data);
    })
  }
  openDetails(film){
    console.log(film)
    this.navCtrl.push('FilmDetailsPage', {film: film});
    // this.navCtrl.push('FilmDetailsPage', {filmId: 2});
  }
  goToPlanets(){
    this.navCtrl.parent.select(2);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
  }

}
