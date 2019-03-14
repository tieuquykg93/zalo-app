import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

username: string='';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  presentAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title ,
      subTitle:message,
      buttons: ['OK']
    });
    alert.present();
  }
  Login(){
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      this.navCtrl.push(TabsPage, {username: this.username});
    }else{
      this.presentAlert('Lỗi','ID không hợp lệ');
    }
  }
}
