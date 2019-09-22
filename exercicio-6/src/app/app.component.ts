import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Pessoas',
      url: '/people/list',
      icon: 'person'
    },
    {
      title: 'Filmes',
      url: '/films/list',
      icon: 'videocam'
    },
    {
      title: 'Planetas',
      url: '/planets/list',
      icon: 'planet'
    },
    {
      title: 'Naves estelares',
      url: '/starships/list',
      icon: 'paper-plane'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
