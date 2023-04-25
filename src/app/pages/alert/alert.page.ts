import { Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  
  constructor(private alertCtrl : AlertController,
              private  alertctrl2 :AlertController, 
              private alertctrl3 : AlertController) { }
  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      backdropDismiss:false,
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [{
        text:'OK',
      handler:()=>{
        console.log('click en ok!')
      }
    }],
    });

    await alert.present();
  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertctrl2.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      backdropDismiss:false,
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete'],
    });

    await alert.present();
  }
  async presentAlertPrompt() {
    const alert = await this.alertctrl3 .create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1',
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2',
        },
       
      ]
    });
      await alert.present();
    }
  }
