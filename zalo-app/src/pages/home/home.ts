import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs'
import { usercreds } from '../../models/interfaces/usercreds';
import { SignupPage } from '../signup/signup';
import { ChatsPage } from '../chats/chats';
import { AuthProvider } from '../../providers/auth/auth'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  credentials = {} as usercreds;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider,)  {

  }
  Login(){
    this.authservice.login(this.credentials).then((res: any) => {
      if (!res.code)
        this.navCtrl.setRoot(TabsPage);
      else
        alert(res);
    })
  }
  SignUp(){
    this.navCtrl.push(SignupPage);
  }
}
