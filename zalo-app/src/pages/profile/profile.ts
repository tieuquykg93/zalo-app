import { Component, NgZone  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import firebase from 'firebase';
import { HomePage } from '../home/home';
// import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  avatar: string;
  displayName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userservice: UserProvider, public zone: NgZone, public alertCtrl: AlertController,
    ) {
  }

  ionViewWillEnter() {
    this.loaduserdetails();
  }

  loaduserdetails() {
    this.userservice.getuserdetails().then((res: any) => {
      this.displayName = res.displayName;
      this.zone.run(() => {
        this.avatar = res.photoURL;
      })
    })
  }
  logout() {
    firebase.auth().signOut().then(() => {
      this.navCtrl.parent.parent.setRoot(HomePage);
    })
  }
}
