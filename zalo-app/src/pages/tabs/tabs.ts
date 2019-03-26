import { Component } from '@angular/core';
import {ChatsPage} from '../chats/chats';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  tab1: string = "ChatsPage";
  // tab2: string = "GroupsPage";
  tab2: string = "ProfilePage";
 
  constructor() {
  }
 
}
// export class TabsPage {
//   username: string = '';
//   tab1: string="ChatsPage";
//   tab2: string="GroupsPage";
//   tab3: string="ProfilePage";
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     this.username = this.navParams.get('username');
//     this.navCtrl.push(ChatsPage, {
//       username: this.username});
//   }

// }
