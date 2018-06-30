import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import {  AlertController } from 'ionic-angular';
// import {MainPage} from "../pages/main/main";
import {LoginPage} from "../pages/login/login";
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar,
              splashScreen: SplashScreen,
              public push: Push,
              public alertCtrl: AlertController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

      this.initPushNotification();

  }



    initPushNotification(){

        const options: PushOptions = {
            android: {
                senderID: "947523033159"
            }
        };

        const pushObject: PushObject = this.push.init(options);

        pushObject.on('registration').subscribe((data: any) => {
            console.log("device token:", data.registrationId);

            let alert = this.alertCtrl.create({
                title: 'device token',
                subTitle: data.registrationId,
                buttons: ['OK']
            });
            alert.present();

        });

        pushObject.on('notification').subscribe((data: any) => {
            console.log('message', data.message);
            if (data.additionalData.foreground) {
                let confirmAlert = this.alertCtrl.create({
                    title: 'New Notification',
                    message: data.message,
                    buttons: [{
                        text: 'Ignore',
                        role: 'cancel'
                    }, {
                        text: 'View',
                        handler: () => {
                            //TODO: Your logic here
                        }
                    }]
                });
                confirmAlert.present();
            } else {
                let alert = this.alertCtrl.create({
                    title: 'clicked on',
                    subTitle: "you clicked on the notification!",
                    buttons: ['OK']
                });
                alert.present();
                console.log("Push notification clicked");
            }
        });

        pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    }
}

