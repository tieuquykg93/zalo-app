import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

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
      //tot
    }else{
      this.presentAlert('Lỗi','ID không hợp lệ');
    }
  }
}
