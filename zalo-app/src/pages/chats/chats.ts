import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {
  username: string = '';
  message: string = '';
  _chatSubscription;
  messages: object[] = [];

  
  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');
    // this._chatSubscription = this.db.list('/chat').valueChanges().subscribe( data => {
    //   this.messages = data;
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  sendMessage() {
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    }).then( () => {
      // message is sent
    }).catch( () => {
      // some error. maybe firebase is unreachable
    });
    this.message = '';
  }
  
}
